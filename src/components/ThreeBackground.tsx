import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  theme?: 'cyan-violet' | 'matrix-green' | 'cosmic-purple';
  intensity?: number;
  slideIndex: number;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  theme = 'cyan-violet',
  slideIndex
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    nodesMesh: THREE.Points;
    linesMesh: THREE.LineSegments;
    floatingObjects: THREE.Mesh[];
    mouseX: number;
    mouseY: number;
    targetMouseX: number;
    targetMouseY: number;
    reqId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060913, 0.0018);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.z = 400;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050711, 1);
    containerRef.current.appendChild(renderer.domElement);

    // 3. Particle Nodes & Neural Connections
    const nodeCount = 140;
    const nodeCoords = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    const spreadX = 800;
    const spreadY = 600;
    const spreadZ = 500;

    for (let i = 0; i < nodeCount; i++) {
      nodeCoords[i * 3] = (Math.random() - 0.5) * spreadX;
      nodeCoords[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      nodeCoords[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.3
      });
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodeCoords, 3));

    // Create glowing circular sprite for nodes
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(157, 78, 221, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const nodeMaterial = new THREE.PointsMaterial({
      size: 10,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const nodesMesh = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodesMesh);

    // 4. Line Connections Mesh
    const maxConnections = nodeCount * 5;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // 5. Floating 3D Tech Objects (Wireframe Geometries)
    const floatingObjects: THREE.Mesh[] = [];

    // Tech Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(45, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-220, 90, -80);
    scene.add(icoMesh);
    floatingObjects.push(icoMesh);

    // Tech Cyber Ring / Torus
    const torusGeo = new THREE.TorusGeometry(55, 1.2, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(240, -110, -50);
    torusMesh.rotation.x = Math.PI / 3;
    scene.add(torusMesh);
    floatingObjects.push(torusMesh);

    // Octahedron core
    const octGeo = new THREE.OctahedronGeometry(35, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(290, 140, -120);
    scene.add(octMesh);
    floatingObjects.push(octMesh);

    // 6. Ambient Subtle Background Grid Floor
    const gridHelper = new THREE.GridHelper(1200, 24, 0x1e1b4b, 0x0f172a);
    gridHelper.position.y = -220;
    gridHelper.position.z = 0;
    scene.add(gridHelper);

    // 7. Mouse Tracker
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;
      if (sceneRef.current) {
        sceneRef.current.targetMouseX = normalizedX * 80;
        sceneRef.current.targetMouseY = normalizedY * 50;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      nodesMesh,
      linesMesh,
      floatingObjects,
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      reqId: 0
    };

    // 9. Animation Loop
    let clock = 0;
    const animate = () => {
      const s = sceneRef.current;
      if (!s) return;

      clock += 0.01;

      // Smooth camera parallax
      s.mouseX += (s.targetMouseX - s.mouseX) * 0.05;
      s.mouseY += (s.targetMouseY - s.mouseY) * 0.05;
      s.camera.position.x = s.mouseX;
      s.camera.position.y = s.mouseY;
      s.camera.lookAt(0, 0, 0);

      // Rotate floating tech solids
      s.floatingObjects[0].rotation.x += 0.005;
      s.floatingObjects[0].rotation.y += 0.007;

      s.floatingObjects[1].rotation.x += 0.004;
      s.floatingObjects[1].rotation.z += 0.006;

      s.floatingObjects[2].rotation.y += 0.008;
      s.floatingObjects[2].rotation.z += 0.003;

      // Update particle nodes and dynamic line connections
      const positions = s.nodesMesh.geometry.attributes.position.array as Float32Array;
      const linePos = s.linesMesh.geometry.attributes.position.array as Float32Array;
      const lineCol = s.linesMesh.geometry.attributes.color.array as Float32Array;

      let lineIndex = 0;
      const connectionDistance = 140;

      for (let i = 0; i < nodeCount; i++) {
        // Apply velocity
        positions[i * 3] += nodeVelocities[i].x;
        positions[i * 3 + 1] += nodeVelocities[i].y;
        positions[i * 3 + 2] += nodeVelocities[i].z;

        // Soft bounce boundaries
        if (Math.abs(positions[i * 3]) > spreadX / 2) nodeVelocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > spreadY / 2) nodeVelocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > spreadZ / 2) nodeVelocities[i].z *= -1;

        // Build connections
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance && lineIndex < maxConnections) {
            const alpha = 1.0 - dist / connectionDistance;

            const pIdx = lineIndex * 6;
            linePos[pIdx] = positions[i * 3];
            linePos[pIdx + 1] = positions[i * 3 + 1];
            linePos[pIdx + 2] = positions[i * 3 + 2];

            linePos[pIdx + 3] = positions[j * 3];
            linePos[pIdx + 4] = positions[j * 3 + 1];
            linePos[pIdx + 5] = positions[j * 3 + 2];

            // Color gradient between cyan & violet
            lineCol[pIdx] = 0.0;
            lineCol[pIdx + 1] = 0.85 * alpha;
            lineCol[pIdx + 2] = 1.0 * alpha;

            lineCol[pIdx + 3] = 0.65 * alpha;
            lineCol[pIdx + 4] = 0.25 * alpha;
            lineCol[pIdx + 5] = 0.95 * alpha;

            lineIndex++;
          }
        }
      }

      // Hide extra lines
      for (let i = lineIndex * 6; i < maxConnections * 6; i++) {
        linePos[i] = 0;
        lineCol[i] = 0;
      }

      s.nodesMesh.geometry.attributes.position.needsUpdate = true;
      s.linesMesh.geometry.attributes.position.needsUpdate = true;
      s.linesMesh.geometry.attributes.color.needsUpdate = true;

      // Slight camera pulse
      s.camera.position.z = 400 + Math.sin(clock * 0.5) * 12;

      s.renderer.render(s.scene, s.camera);
      s.reqId = requestAnimationFrame(animate);
    };

    sceneRef.current.reqId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.reqId);
        renderer.dispose();
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  // Update theme colors when prop changes
  useEffect(() => {
    if (!sceneRef.current) return;
    const { floatingObjects } = sceneRef.current;
    if (floatingObjects.length >= 3) {
      if (theme === 'matrix-green') {
        (floatingObjects[0].material as THREE.MeshBasicMaterial).color.setHex(0x10b981);
        (floatingObjects[1].material as THREE.MeshBasicMaterial).color.setHex(0x059669);
        (floatingObjects[2].material as THREE.MeshBasicMaterial).color.setHex(0x34d399);
      } else if (theme === 'cosmic-purple') {
        (floatingObjects[0].material as THREE.MeshBasicMaterial).color.setHex(0xc084fc);
        (floatingObjects[1].material as THREE.MeshBasicMaterial).color.setHex(0x9333ea);
        (floatingObjects[2].material as THREE.MeshBasicMaterial).color.setHex(0xf43f5e);
      } else {
        (floatingObjects[0].material as THREE.MeshBasicMaterial).color.setHex(0x8b5cf6);
        (floatingObjects[1].material as THREE.MeshBasicMaterial).color.setHex(0x00f0ff);
        (floatingObjects[2].material as THREE.MeshBasicMaterial).color.setHex(0xec4899);
      }
    }
  }, [theme]);

  // Gentle camera push on slide change
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.camera.position.z = 450;
    }
  }, [slideIndex]);

  return (
    <div
      ref={containerRef}
      className="canvas-3d-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
};
