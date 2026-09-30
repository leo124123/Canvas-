import type { SlideData } from '../types/presentation';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 'intro-team',
    themeCategory: 'Equipo',
    member: 'Equipo de Exposición',
    title: 'Integrantes del',
    titleHighlight: 'Equipo y Matrícula',
    description: 'Asignación temática para el Tema 4 y La Computadora en las Áreas del Saber.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/slide_ai_brain.jpg',
    interactiveType: 'equipo',
    teamMembers: [
      { id: 1, role: 'Integrante 1', name: 'Rubi Shantiel Mieses Caro', matricula: 'A00126327', topic: 'Introducción a la IA' },
      { id: 2, role: 'Integrante 2', name: 'Leonardo De La Cruz Rodríguez', matricula: 'A00125780', topic: 'Tipos de IA' },
      { id: 3, role: 'Integrante 3', name: 'Miguel García', matricula: 'A00126438', topic: '¿Cómo funciona la IA?' },
      { id: 4, role: 'Integrante 4', name: 'Nombre Integrante 4', matricula: 'Mat. 2024-0004', topic: 'Aplicaciones y efectos de la IA' },
      { id: 5, role: 'Integrante 5', name: 'Sandra Mesa', matricula: 'A00126291', topic: 'Computación en la medicina y las ciencias' },
      { id: 6, role: 'Integrante 6', name: 'Arianna Ramirez', matricula: 'A00126080', topic: 'Computación en la educación y las humanidades' },
      { id: 7, role: 'Integrante 7', name: 'Nombre Integrante 7', matricula: 'Mat. 2024-0007', topic: 'Negocios, ingeniería y otras áreas' }
    ],
    cards: [
      {
        id: 'c-team-1',
        number: '01',
        title: 'Tema 4: IA',
        summary: '4 Expositores dedicados a los fundamentos, tipologías, mecanismos profundos y ética.',
        iconName: 'FileText',
        badgeColor: 'blue',
        details: {
          subtitle: 'Bloque de Inteligencia Artificial',
          points: [
            'Integrante 1: Introducción y conceptos fundamentales.',
            'Integrante 2: Clasificación de tipos de IA (Estrecha, Generativa y AGI).',
            'Integrante 3: Mecanismos de aprendizaje, datos y redes neuronales.',
            'Integrante 4: Aplicaciones, ventajas, riesgos y gobernanza ética.'
          ],
          statBadge: 'Integrantes 1 al 4'
        }
      },
      {
        id: 'c-team-2',
        number: '02',
        title: 'Tema 5: Áreas del Saber',
        summary: '3 Expositores abordando medicina, ciencias, educación, humanidades, finanzas e ingeniería.',
        iconName: 'Lightbulb',
        badgeColor: 'purple',
        details: {
          subtitle: 'Bloque de Áreas del Saber Computacional',
          points: [
            'Integrante 5: Computación en medicina, biología y ciencias exactas.',
            'Integrante 6: Educación virtual, bibliotecas digitales y humanidades.',
            'Integrante 7: Empresas, finanzas, ingeniería y convergencia del conocimiento.'
          ],
          statBadge: 'Integrantes 5 al 7'
        }
      },
      {
        id: 'c-team-3',
        number: '03',
        title: 'Procesador Cuántico IA',
        summary: 'Arquitectura de cómputo cognitivo de última generación energizada por núcleos neuronales.',
        iconName: 'Settings',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Infraestructura Tecnológica',
          points: [
            'Simulación de silicio cuántico con bus de datos de alta frecuencia.',
            'Representa el hardware que hace posible los modelos de frontera.',
            'Visualizador interactivo de frecuencia de reloj y sincronización de nodos.'
          ],
          statBadge: 'Quantum Architecture'
        }
      },
      {
        id: 'c-team-4',
        number: '04',
        title: 'Inicio de la Exposición',
        summary: 'Desliza el scroll hacia abajo para avanzar al desglose temático de cada integrante.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Guía de Navegación',
          points: [
            'Desliza con el ratón o trackpad para pasar a la siguiente diapositiva.',
            'Puedes editar los nombres y matrículas haciendo clic en la tarjeta.',
            'Disfruta de la experiencia visual 3D interactiva.'
          ],
          statBadge: 'Navegación Fluida'
        }
      }
    ]
  },
  {
    id: 'intro-cover',
    themeCategory: 'Bienvenida',
    member: 'Presentación General',
    title: 'Exposición de',
    titleHighlight: 'IA & Áreas del Saber',
    description: 'Una visión integral y moderna sobre la Inteligencia Artificial y el impacto del cómputo en todas las áreas del conocimiento.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_room_clean.jpg',
    interactiveType: 'matrix',
    cards: [
      {
        id: 'c-intro-1',
        number: '01',
        title: 'Introducción a la IA',
        summary: 'Concepto fundamental, características y diferencia radical con el cómputo tradicional.',
        iconName: 'FileText',
        badgeColor: 'blue',
        details: {
          subtitle: 'Fundamentos de la Inteligencia Artificial',
          points: [
            'Integrantes 1 al 4 exploran desde el concepto elemental hasta el impacto social.',
            'Comprenderemos por qué la IA no es sólo software tradicional, sino una nueva era de inferencia.',
            'Análisis de modelos generativos, redes neuronales y dilemas de privacidad.'
          ],
          statBadge: 'Tema 4'
        }
      },
      {
        id: 'c-intro-2',
        number: '02',
        title: 'Mecanismos y Tipos',
        summary: 'IA Débil, Generativa, AGI, Machine Learning y Deep Learning en acción.',
        iconName: 'Lightbulb',
        badgeColor: 'purple',
        details: {
          subtitle: 'El Motor Matemático y Cognitivo',
          points: [
            'De la clasificación de datos al entrenamiento de redes neuronales multicapa.',
            'Diferencias entre IA especializada de hoy y la futura AGI teórica.',
            'Demostración del flujo de datos y matrices de inferencia.'
          ],
          statBadge: 'Modelos y Algoritmos'
        }
      },
      {
        id: 'c-intro-3',
        number: '03',
        title: 'Computación en el Saber',
        summary: 'Aplicación revolucionaria en medicina, ciencias, educación, finanzas e ingeniería.',
        iconName: 'Settings',
        badgeColor: 'cyan',
        details: {
          subtitle: 'La Computadora como Catalizador',
          points: [
            'Integrantes 5 al 7 demuestran la omnipresencia del cómputo.',
            'Revolución en salud (AlphaFold, diagnósticos tempranos) y ciencias puras.',
            'Digitalización del legado humanístico y automatización de la industria global.'
          ],
          statBadge: 'Tema 5'
        }
      },
      {
        id: 'c-intro-4',
        number: '04',
        title: 'Interacción y Desafío',
        summary: 'Navega deslizando el scroll para avanzar y participa en el mini-juego final.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Dinámica de la Presentación',
          points: [
            'Transición fluida 3D al deslizar la rueda o trackpad.',
            'Haz clic en cualquier tarjeta para ver su contenido a fondo.',
            'Al final de la exposición se activará el desafío interactivo.'
          ],
          statBadge: 'Interactividad'
        }
      }
    ]
  },
  {
    id: 'tema4-integrante1',
    themeCategory: 'Tema 4: Inteligencia Artificial',
    member: 'Rubi Shantiel Mieses Caro (A00126327) — Introducción a la IA',
    title: 'Introducción a la',
    titleHighlight: 'Inteligencia Artificial',
    description: 'Hoy día la Inteligencia Artificial está muy presente en nuestra vida cotidiana y tiene cada vez mayor importancia en el mundo tecnológico: qué es, cómo opera y cómo se diferencia de una computadora tradicional.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_t4_intro.jpg',
    interactiveType: 'comparison',
    cards: [
      {
        id: 'c-t4i1-1',
        number: '01',
        title: '¿Qué es la Inteligencia Artificial?',
        summary: 'Rama de la informática que busca desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana (reconocer imágenes, idiomas, resolver problemas).',
        iconName: 'Cpu',
        badgeColor: 'blue',
        details: {
          subtitle: 'Definición y Funcionamiento Real de la IA',
          points: [
            'Definición fundamental: La Inteligencia Artificial (IA) es una rama de la informática que busca desarrollar sistemas y máquinas capaces de realizar tareas que normalmente requieren de la inteligencia humana.',
            'Actividades que emula: Una persona puede reconocer una imagen, comprender un idioma, aprender de sus experiencias, resolver un problema o tomar una decisión; la IA intenta que los sistemas informáticos realicen estas actividades.',
            'No piensa como un humano: Esto no significa que una computadora piense exactamente como una persona. Funciona mediante datos, algoritmos y modelos matemáticos que permiten encontrar patrones y producir respuestas.',
            'Presencia en la vida diaria: Hoy en día, conocida a nivel mundial, la IA está muy presente en nuestra vida cotidiana y con creciente relevancia tecnológica.'
          ],
          exampleTitle: 'Capacidades Humanas emuladas por IA',
          exampleText: 'Reconocer rostros en fotos, interpretar audios o traducir idiomas en tiempo real mediante datos y patrones matemáticos.',
          statBadge: 'IA = Datos + Algoritmos + Modelos'
        }
      },
      {
        id: 'c-t4i1-2',
        number: '02',
        title: 'Características Principales de la IA',
        summary: 'Las 5 características esenciales: Aprendizaje progresivo, reconocimiento de patrones, resolución de problemas, automatización y procesamiento masivo de datos.',
        iconName: 'Bot',
        badgeColor: 'purple',
        details: {
          subtitle: 'Las 5 Características Fundamentales',
          points: [
            '1. Aprendizaje: Algunos sistemas pueden aprender a partir de grandes cantidades de datos y mejorar sus resultados con el tiempo.',
            '2. Reconocimiento de patrones: La IA puede identificar patrones en textos, imágenes, sonidos y otros tipos de información.',
            '3. Resolución de problemas: Puede analizar información y encontrar soluciones a determinados problemas.',
            '4. Automatización: Permite realizar tareas de manera automática, reduciendo la necesidad de intervención humana en ciertas actividades.',
            '5. Procesamiento de información: Puede analizar grandes cantidades de datos en poco tiempo, algo que sería sumamente difícil de hacer manualmente.'
          ],
          exampleTitle: 'Ventaja Operativa',
          exampleText: 'Al unir el reconocimiento de patrones y la velocidad de cómputo, la IA procesa volúmenes masivos de información en segundos.',
          statBadge: '5 Pilares de la IA'
        }
      },
      {
        id: 'c-t4i1-3',
        number: '03',
        title: 'IA vs. Computadora Tradicional',
        summary: 'La computadora tradicional sigue instrucciones programadas directas (ej. 5+5); la IA trabaja con datos y modelos para reconocer patrones, aprender y resolver tareas complejas.',
        iconName: 'Binary',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Diferencia de Paradigma: Instrucción vs. Aprendizaje',
          points: [
            'Computadora tradicional: Normalmente sigue instrucciones específicas programadas previamente. Por ejemplo, al sumar 5 + 5 en una calculadora, ejecuta una operación definida y muestra el resultado.',
            'Sistema de Inteligencia Artificial: Puede trabajar con grandes cantidades de datos y, según el tipo de IA, utilizar patrones aprendidos para generar una respuesta, predecir o reconocer información.',
            'Ejemplo del reconocimiento facial: En lugar de simplemente seguir un rígido "si ocurre esto, haz aquello", el sistema analiza características del rostro y las compara con lo aprendido previamente.',
            'Diferencia principal: La tradicional ejecuta instrucciones programadas directas; la IA utiliza datos y modelos para reconocer patrones, aprender de ellos y realizar tareas complejas.'
          ],
          comparison: {
            traditional: 'Instrucciones fijas programadas: "Si ocurre X, haz Y" (Calculadora 5 + 5)',
            ai: 'Datos + Modelos: Aprende patrones para inferir y resolver (Reconocimiento Facial)'
          },
          exampleTitle: 'Calculadora vs. Face ID',
          exampleText: 'La calculadora ejecuta una fórmula matemática fija; el reconocimiento facial compara rasgos biométricos con datos entrenados.'
        }
      },
      {
        id: 'c-t4i1-4',
        number: '04',
        title: 'Fórmulas y Puntos Clave para Exponer',
        summary: 'Síntesis de Rubi para dominar la introducción: Concepto central, las 5 características clave y la regla de oro frente a la computación tradicional.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Guía de Memoria Rápida para la Exposición',
          points: [
            '1. Concepto: La IA es una rama de la informática que emula tareas de inteligencia humana mediante datos, algoritmos y patrones (no piensa como persona).',
            '2. 5 Características: Aprendizaje continuo, Reconocimiento de patrones, Resolución de problemas, Automatización y Procesamiento masivo de datos.',
            '3. Computadora Tradicional vs. IA: La clásica ejecuta instrucciones programadas (calculadora 5+5); la IA aprende de datos para reconocer patrones (reconocimiento facial).'
          ],
          exampleTitle: 'Mensaje Central de Rubi',
          exampleText: '"La diferencia principal está en que una computadora tradicional ejecuta instrucciones programadas de forma directa, mientras que un sistema de IA puede utilizar datos y modelos para reconocer patrones, aprender de ellos y realizar tareas más complejas."',
          statBadge: 'Resumen de Introducción'
        }
      }
    ]
  },
  {
    id: 'tema4-integrante2',
    themeCategory: 'Tema 4: Inteligencia Artificial',
    member: 'Leonardo De La Cruz Rodríguez (A00125780) — Tipos de IA',
    title: 'Tipos de',
    titleHighlight: 'Inteligencia Artificial',
    description: 'Ahora voy a hablar sobre tres tipos importantes de inteligencia artificial: la IA débil o especializada, la IA generativa y la inteligencia artificial general (AGI).',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_room_screens.jpg',
    interactiveType: 'types',
    cards: [
      {
        id: 'c-t4i2-1',
        number: '01',
        title: 'IA Débil o Especializada',
        summary: 'Diseñada para realizar una tarea específica o un conjunto limitado de tareas. "Débil" no significa mala calidad: es una IA especialista.',
        iconName: 'Cpu',
        badgeColor: 'blue',
        details: {
          subtitle: 'IA Especialista: Diseñada para Tareas Específicas',
          points: [
            'Diseño específico: Está diseñada para realizar una tarea específica o un conjunto limitado de tareas con alta efectividad.',
            'Aclaración fundamental: La palabra "débil" no significa de mala calidad; significa que está especializada en determinadas funciones y no tiene una inteligencia general como la de una persona.',
            'Enfoque delimitado: Puede identificar nuestro rostro o filtrar correos, pero no puede realizar cualquier otra tarea que le pidamos fuera de su especialidad.',
            'En pocas palabras: Podemos recordar la IA especializada como una IA especialista, porque está enfocada en realizar determinadas tareas.'
          ],
          exampleTitle: 'Ejemplos en la Vida Cotidiana',
          exampleText: 'Reconocimiento facial de nuestros teléfonos, sistemas de recomendación (YouTube, Netflix), filtros de correo no deseado (spam) y sistemas de detección de fraudes.',
          statBadge: 'IA Especializada = Especialista'
        }
      },
      {
        id: 'c-t4i2-2',
        number: '02',
        title: 'IA Generativa',
        summary: 'Capaz de crear contenido nuevo a partir de los patrones que ha aprendido durante su entrenamiento: textos, imágenes, música, audio, videos y código.',
        iconName: 'Bot',
        badgeColor: 'purple',
        details: {
          subtitle: 'IA Creadora de Contenido: Síntesis de Patrones',
          points: [
            'Creación inédita: No solamente puede analizar información, sino que también puede producir contenido nuevo utilizando los patrones aprendidos en su entrenamiento.',
            'Formatos que puede generar: Textos, Imágenes, Música, Audio, Videos y Código de programación.',
            'Interacción por instrucciones: Cuando le pedimos que escriba una historia, cree una imagen desde una descripción o genere código, estamos usando IA generativa.',
            'En pocas palabras: Una forma sencilla de recordarla es IA generativa = IA creadora de contenido.'
          ],
          exampleTitle: 'Herramientas y Casos Destacados',
          exampleText: 'ChatGPT (puede generar textos y código a partir de instrucciones que recibe), y herramientas especializadas en generar imágenes, música y videos por prompt.',
          statBadge: 'IA Generativa = Creadora de Contenido'
        }
      },
      {
        id: 'c-t4i2-3',
        number: '03',
        title: 'Inteligencia Artificial General — AGI',
        summary: 'Capaz de hacer muchas cosas diferentes y aprender nuevas tareas como una persona (matemáticas, idiomas, código). Se abrevia AGI; un concepto en investigación.',
        iconName: 'Brain',
        badgeColor: 'cyan',
        details: {
          subtitle: 'IA General — AGI: Capacidades Humanas y Adaptabilidad',
          points: [
            'Sigla internacional: Se le conoce comúnmente como AGI (siglas en inglés de Artificial General Intelligence).',
            'Polivalencia cognitiva: Sería capaz de hacer muchas cosas diferentes y aprender nuevas tareas, en vez de estar limitada a una sola función.',
            'Aprendizaje parecido al humano: Podría aprender matemáticas, idiomas y programación de una manera más parecida a una persona.',
            'Estado actual de desarrollo: Actualmente esto todavía es un concepto teórico que se sigue investigando activamente en la ciencia.',
            'En pocas palabras: Podemos recordar la IA general como IA general = una inteligencia artificial con capacidades generales.'
          ],
          exampleTitle: 'Horizonte Teórico en Investigación',
          exampleText: 'Aspiración científica hacia un intelecto sintético adaptable, capaz de transferir saberes y razonar con sentido común en múltiples campos.',
          statBadge: 'IA General = AGI'
        }
      },
      {
        id: 'c-t4i2-4',
        number: '04',
        title: 'Fórmulas para Recordar',
        summary: 'Las 3 fórmulas mnemotécnicas para dominar y exponer los tipos de IA: IA Especialista, IA Creadora de Contenido e Inteligencia con Capacidades Generales.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Guía de Memoria Rápida para la Exposición',
          points: [
            '1. IA Especializada = IA Especialista (Enfocada en realizar determinadas tareas específicas: reconocimiento facial, Netflix, anti-spam, fraudes).',
            '2. IA Generativa = IA Creadora de Contenido (Aprende patrones y produce textos, imágenes, música, audio, videos y código).',
            '3. IA General = Capacidades Generales — Conocida como AGI. Aprende múltiples materias como matemáticas, idiomas y código al igual que una persona; en investigación.'
          ],
          exampleTitle: 'Mensaje Central del Integrante 2',
          exampleText: '"Ahora voy a hablar sobre tres tipos importantes de inteligencia artificial: la IA débil o especializada, la IA generativa y la inteligencia artificial general (AGI)."',
          statBadge: 'Resumen Mnemotécnico'
        }
      }
    ]
  },
  {
    id: 'tema4-integrante2-ejemplos',
    themeCategory: 'Tema 4: Inteligencia Artificial',
    member: 'Leonardo De La Cruz Rodríguez (A00125780) — Ejemplos Prácticos',
    title: 'Ejemplos de',
    titleHighlight: 'Tipos de IA',
    description: 'Evidencia práctica en el mundo real: desde el reconocimiento facial en teléfonos y las recomendaciones de YouTube/Netflix, hasta ChatGPT y el aprendizaje general hacia AGI.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_room_screens.jpg',
    interactiveType: 'grid-examples',
    cards: [
      {
        id: 'c-t4ej-1',
        number: '01',
        title: 'Reconocimiento Facial en Smartphones',
        summary: 'IA especializada que identifica nuestro rostro y lo compara con información registrada; no realiza ninguna otra tarea fuera de esa función.',
        iconName: 'ScanFace',
        badgeColor: 'blue',
        imageUrl: '/assets/images/grid_card_facial.jpg',
        imageTag: 'IA Especializada: Smartphones',
        imageCaption: 'El reconocimiento facial de nuestros teléfonos identifica nuestro rostro y lo compara con información registrada, enfocado exclusivamente en esa tarea.',
        details: {
          subtitle: 'IA Débil o Especializada: Reconocimiento Facial Móvil',
          points: [
            'Identificación y comparación: Esta tecnología puede identificar nuestro rostro y compararlo con información biométrica registrada en milisegundos.',
            'Límite de dominio específico: Eso no significa que pueda realizar cualquier otra tarea que nosotros le pidamos (no puede redactar, traducir ni calcular impuestos).',
            'Significado de "débil": La palabra "débil" no significa mala calidad; significa que está especializada en determinadas funciones y carece de inteligencia general humana.',
            'Regla mnemotécnica: IA Especializada = IA Especialista (enfocada en realizar una tarea concreta con máxima eficacia).'
          ],
          exampleTitle: 'Caso Práctico en Teléfonos',
          exampleText: 'El reconocimiento facial de nuestros teléfonos utiliza IA especializada: puede identificar nuestro rostro y compararlo con información registrada, pero no puede realizar cualquier otra tarea que le pidamos.'
        }
      },
      {
        id: 'c-t4ej-2',
        number: '02',
        title: 'Recomendaciones, Spam y Fraudes',
        summary: 'Sistemas de recomendación de YouTube o Netflix, filtros de correo no deseado y detección de fraudes bancarios en milisegundos.',
        iconName: 'ShieldCheck',
        badgeColor: 'purple',
        imageUrl: '/assets/images/grid_card_recs.jpg',
        imageTag: 'YouTube, Netflix, Spam & Fraudes',
        imageCaption: 'Algoritmos especializados de YouTube/Netflix para sugerir contenidos, filtros de correo spam y detección de fraudes bancarios.',
        details: {
          subtitle: 'IA Especializada: Recomendaciones, Filtros y Seguridad',
          points: [
            'Sistemas de recomendación: YouTube y Netflix analizan tu historial de visualización y patrones de consumo para sugerirte videos y películas afines.',
            'Filtros de correo no deseado: Analizan millones de mensajes por segundo para separar correo legítimo de spam comercial o fraudulento.',
            'Detección de fraudes financieros: Sistemas que vigilan transacciones bancarias en tiempo real y bloquean compras sospechosas ante anomalías.',
            'Esencia especialista: Cada uno de estos sistemas es un especialista brillante en su propio campo, sin salirse de los límites de su tarea.'
          ],
          exampleTitle: 'Casos Reales Cotidianos',
          exampleText: 'Otros ejemplos son los sistemas de recomendación de plataformas como YouTube o Netflix, los filtros de correo no deseado y algunos sistemas utilizados para detectar fraudes.'
        }
      },
      {
        id: 'c-t4ej-3',
        number: '03',
        title: 'ChatGPT y Creación Multimedia',
        summary: 'IA generativa capaz de escribir historias, generar código, crear imágenes desde descripciones y producir música, audio y videos.',
        iconName: 'Bot',
        badgeColor: 'cyan',
        imageUrl: '/assets/images/grid_card_genai.jpg',
        imageTag: 'ChatGPT & IA Generativa',
        imageCaption: 'Modelos generativos produciendo contenido inédito: textos y código en ChatGPT, arte visual por prompt, música y video sintético.',
        details: {
          subtitle: 'IA Generativa: Creación de Texto, Código y Multimedia',
          points: [
            'Producción a partir de entrenamiento: Es un tipo de IA capaz de crear contenido nuevo a partir de los patrones que ha aprendido durante su entrenamiento.',
            'ChatGPT: Un ejemplo muy conocido es ChatGPT, que puede generar textos y código a partir de las instrucciones que recibe.',
            'Diversidad de medios generados: Textos, Imágenes, Música, Audio, Videos y Código de programación.',
            'De la instrucción al resultado: Cuando le pedimos que escriba una historia, cree una imagen a partir de una descripción o genere código, usamos IA generativa.',
            'Fórmula esencial: IA generativa = IA creadora de contenido (no solo analiza información, sino que produce contenido nuevo).'
          ],
          exampleTitle: 'De Instrucción a Contenido Inédito',
          exampleText: 'ChatGPT genera textos y código al instante a partir de tus instrucciones; herramientas complementarias sintetizan imágenes fotorrealistas, pistas musicales y videos.'
        }
      },
      {
        id: 'c-t4ej-4',
        number: '04',
        title: 'Aprendizaje Multidisciplinario — AGI',
        summary: 'Capaz de hacer muchas cosas diferentes y aprender matemáticas, idiomas y programación de forma integrada como una persona. Conocida como AGI; en investigación.',
        iconName: 'Brain',
        badgeColor: 'magenta',
        imageUrl: '/assets/images/grid_card_agi.jpg',
        imageTag: 'Concepto AGI en Investigación',
        imageCaption: 'Investigación hacia la Inteligencia Artificial General (AGI): aprendizaje multidominio en matemáticas, idiomas y programación como una persona.',
        details: {
          subtitle: 'IA General — AGI: Versatilidad y Aprendizaje Parecido al Humano',
          points: [
            'Sigla internacional: Se abrevia AGI por sus siglas en inglés (Artificial General Intelligence).',
            'Capacidad multifuncional: Sería una inteligencia artificial capaz de hacer muchas cosas diferentes y aprender nuevas tareas, en vez de estar limitada a una sola función.',
            'Aprender como una persona: Por ejemplo, podría aprender matemáticas, idiomas y programación, de una manera más parecida a una persona.',
            'Estado actual en la ciencia: Actualmente esto todavía es un concepto teórico que se sigue investigando en los laboratorios más avanzados.',
            'Regla mnemotécnica: IA general = Una inteligencia artificial con capacidades generales.'
          ],
          exampleTitle: 'El Gran Reto Científico',
          exampleText: 'A diferencia de la IA especializada (que solo sabe hacer una tarea), la IA general (AGI) aspira a ser una mente sintética adaptable a cualquier desafío del conocimiento humano.',
          statBadge: 'AGI = En Investigación'
        }
      }
    ]
  },
  {
    id: 'tema4-integrante3',
    themeCategory: 'Tema 4: Inteligencia Artificial',
    member: 'Miguel García (A00126438) — ¿Cómo funciona la IA?',
    title: '¿Cómo Funciona la',
    titleHighlight: 'Inteligencia Artificial?',
    description: 'Los cuatro pilares y el ciclo de entrenamiento inteligente: la recolección de Datos adecuados, los Algoritmos de patrones, el Machine Learning, el Deep Learning y el caso práctico de cómo aprende una IA.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_t4_how_it_works.jpg',
    interactiveType: 'neural',
    cards: [
      {
        id: 'c-t4i3-1',
        number: '01',
        title: '1. Datos: El Combustible para Aprender',
        summary: 'La IA necesita datos para aprender (imágenes, textos, sonidos, números). Mientras más adecuados sean los datos, mejor puede aprender el sistema.',
        iconName: 'FileText',
        badgeColor: 'blue',
        details: {
          subtitle: 'Datos: La Base Fundamental del Aprendizaje',
          points: [
            'Necesidad de datos: La IA necesita datos para aprender. Estos pueden ser imágenes, textos, sonidos, números o información de diferentes tipos.',
            'Calidad y adecuación: Mientras más adecuados y pertinentes sean los datos, mejor puede aprender el sistema.',
            'Ejemplo práctico: Para enseñar a una IA a reconocer perros, se le muestran muchas imágenes de perros y de otros animales.'
          ],
          exampleTitle: 'Ejemplo: Reconocimiento de Perros',
          exampleText: 'Para enseñar a una IA a reconocer perros, se le muestran muchas imágenes de perros y de otros animales para que distinga sus patrones únicos.',
          statBadge: 'Datos = Base de la IA'
        }
      },
      {
        id: 'c-t4i3-2',
        number: '02',
        title: '2. Algoritmos y Patrones',
        summary: 'Un algoritmo es un conjunto de instrucciones que indica a la computadora cómo procesar los datos y encontrar patrones.',
        iconName: 'Cpu',
        badgeColor: 'purple',
        details: {
          subtitle: 'Algoritmos: Instrucciones para Procesar Datos',
          points: [
            '¿Qué es un algoritmo?: Un algoritmo es un conjunto de instrucciones que indica a la computadora cómo procesar los datos y encontrar patrones.',
            'Extracción de características: Analiza formas, contrastes, frecuencias y relaciones matemáticas en la información.',
            'Ejemplo práctico: El algoritmo analiza las características de las imágenes para identificar cuáles corresponden a un perro.'
          ],
          exampleTitle: 'Ejemplo del Algoritmo en Imágenes',
          exampleText: 'El algoritmo analiza las características de las imágenes para identificar cuáles corresponden exactamente a un perro.',
          statBadge: 'Algoritmos = Instrucciones'
        }
      },
      {
        id: 'c-t4i3-3',
        number: '03',
        title: '3. Machine Learning (Aprendizaje Automático)',
        summary: 'Parte de la IA que permite que una computadora aprenda a partir de datos, sin tener que programar manualmente cada respuesta.',
        iconName: 'Sparkles',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Machine Learning: Aprender a partir de Datos',
          points: [
            'Concepto fundamental: El Machine Learning (aprendizaje automático) es una parte de la IA que permite que una computadora aprenda a partir de datos, sin tener que programar manualmente cada respuesta.',
            'Sin programación manual: El sistema deduce las reglas a partir de los datos previamente observados.',
            'Ejemplo del filtro de spam: Si una IA recibe miles de correos marcados como "spam" y "no spam", aprende a reconocer características que le permiten clasificar nuevos correos.'
          ],
          exampleTitle: 'Ejemplo Real: Filtro Anti-Spam',
          exampleText: 'Si una IA recibe miles de correos marcados como "spam" y "no spam", aprende a reconocer características que le permiten clasificar nuevos correos automáticamente.',
          statBadge: 'Machine Learning = Aprendizaje Autónomo'
        }
      },
      {
        id: 'c-t4i3-4',
        number: '04',
        title: '4. Deep Learning & Ejemplo de Gatos',
        summary: 'Redes neuronales multicapa para analizar información compleja (rostros, voz, traducción) y el ciclo en 6 pasos de cómo aprende una IA a reconocer gatos.',
        iconName: 'Brain',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Deep Learning y el Ciclo Práctico de Aprendizaje',
          points: [
            '¿Qué es Deep Learning?: El Deep Learning (aprendizaje profundo) es un tipo de Machine Learning que utiliza redes neuronales artificiales con muchas capas para analizar información compleja.',
            'Aplicaciones principales: Se utiliza, por ejemplo, para reconocimiento facial, traducción automática, reconocimiento de voz y análisis de imágenes.',
            'Ejemplo sencillo de cómo aprende una IA (Caso Gatos):',
            '  1. Le damos muchas imágenes de gatos y otros animales.',
            '  2. La IA analiza las imágenes y encuentra patrones.',
            '  3. Compara sus resultados con las respuestas correctas.',
            '  4. Ajusta su modelo cuando se equivoca.',
            '  5. Después de entrenarse, recibe una imagen nueva.',
            '  6. Utiliza lo aprendido para determinar si la imagen contiene un gato.'
          ],
          exampleTitle: 'Ciclo Práctico: Enseñar a reconocer Gatos',
          exampleText: 'Imágenes variadas → Análisis de patrones → Comparación con respuestas correctas → Ajuste al equivocarse → Prueba con imagen nueva → Decisión informada.',
          statBadge: 'Deep Learning = Redes Multicapa'
        }
      }
    ]
  },
  {
    id: 'tema4-integrante4',
    themeCategory: 'Tema 4: Inteligencia Artificial',
    member: 'Integrante 4 — Aplicaciones y efectos de la IA',
    title: 'Aplicaciones, Efectos y',
    titleHighlight: 'Ética de la IA',
    description: 'La presencia omnipresente de la IA en nuestra rutina, sus ventajas transformadoras, riesgos de sesgo y el imperativo de un uso responsable.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_t4_ethics.jpg',
    interactiveType: 'ethics',
    cards: [
      {
        id: 'c-t4i4-1',
        number: '01',
        title: 'IA en la Vida Cotidiana',
        summary: 'GPS con rutas en tiempo real, asistentes inteligentes de voz, recomendaciones de streaming y banca digital.',
        iconName: 'FileText',
        badgeColor: 'blue',
        details: {
          subtitle: 'Presencia Ubicua en el Día a Día',
          points: [
            'Navegación inteligente: Google Maps y Waze predicen congestión vehicular en tiempo real.',
            'Asistentes de voz y domótica para control del hogar.',
            'Personalización de contenidos en plataformas digitales.',
            'Detección instantánea de transacciones bancarias sospechosas.'
          ],
          statBadge: 'Uso Diario Ubicuo'
        }
      },
      {
        id: 'c-t4i4-2',
        number: '02',
        title: 'Ventajas Extraordinarias',
        summary: 'Automatización de tareas repetitivas, precisión sobrehumana en micro-procesos y disponibilidad ininterrumpida 24/7.',
        iconName: 'Lightbulb',
        badgeColor: 'purple',
        details: {
          subtitle: 'Ganancias en Eficiencia y Productividad',
          points: [
            'Reducción drástica del error humano en tareas repetitivas y de alta fatiga.',
            'Procesamiento ultra-rápido de volúmenes masivos de información.',
            'Aceleración en el descubrimiento de fármacos y nuevos materiales científicos.',
            'Herramientas de accesibilidad para personas con diversas discapacidades.'
          ],
          statBadge: 'Eficiencia Multiplicada'
        }
      },
      {
        id: 'c-t4i4-3',
        number: '03',
        title: 'Riesgos y Desafíos Críticos',
        summary: 'Sesgos algorítmicos discriminatorios, opacidad en la toma de decisiones (cajas negras) y desinformación con deepfakes.',
        iconName: 'Settings',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Puntos Críticos de Atención Global',
          points: [
            'Sesgo en los datos de entrenamiento que perpetúa inequidades históricas.',
            'Alucinaciones en modelos generativos que inventan hechos con tono convincente.',
            'Falsificaciones multimedia (deepfakes) que vulneran la confianza pública.'
          ],
          statBadge: 'Riesgo Algorítmico'
        }
      },
      {
        id: 'c-t4i4-4',
        number: '04',
        title: 'Privacidad y Uso Responsable',
        summary: 'Gobernanza ética, protección estricta de datos personales, transición del empleo y supervisión humana permanente.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Marco Ético y Futuro del Trabajo',
          points: [
            'Leyes internacionales como el AI Act de la Unión Europea.',
            'Garantizar que la toma de decisiones críticas siempre incluya supervisión humana (Human-in-the-loop).',
            'Capacitación laboral continua para colaborar con herramientas aumentadas.'
          ],
          statBadge: 'Conclusión Integrante 4'
        }
      }
    ]
  },
  {
    id: 'tema5-integrante5',
    themeCategory: 'Tema 5: La Computadora en Áreas del Saber',
    member: 'Sandra Mesa (A00126291) — Medicina y Ciencias',
    title: 'Computación en la',
    titleHighlight: 'Medicina y Ciencias',
    description: 'La computación se ha convertido en una herramienta fundamental para procesar grandes cantidades de información, realizar cálculos complejos y apoyar la toma de decisiones clínicas y científicas.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_t5_medicine.jpg',
    interactiveType: 'simulation',
    cards: [
      {
        id: 'c-t5i5-1',
        number: '01',
        title: 'Diagnóstico Médico',
        summary: 'Análisis de radiografías, tomografías y resonancias magnéticas con computadoras e IA para detectar neumonía, tumores y patologías.',
        iconName: 'Activity',
        badgeColor: 'blue',
        details: {
          subtitle: 'Detección Temprana y Soporte Clínico',
          points: [
            'Procesamiento de imágenes: Las computadoras permiten analizar radiografías, tomografías y resonancias magnéticas para ayudar a detectar enfermedades.',
            'Asistencia diagnóstica con IA: Un sistema de inteligencia artificial puede analizar una radiografía y ayudar a identificar señales tempranas de neumonía o tumores.',
            'Apoyo a la toma de decisiones: Brinda criterios objetivos y mediciones precisas a los médicos especialistas.'
          ],
          exampleTitle: 'Caso Práctico en Diagnóstico',
          exampleText: 'Análisis automatizado de placas pulmonares identificando opacidades y patrones tumorales en segundos.',
          statBadge: 'Diagnóstico Médico'
        }
      },
      {
        id: 'c-t5i5-2',
        number: '02',
        title: 'Investigación Científica',
        summary: 'Estudio de enfermedades, análisis de resultados experimentales y programas informáticos para investigar el ADN y nuevos medicamentos.',
        iconName: 'Dna',
        badgeColor: 'purple',
        details: {
          subtitle: 'Genómica y Desarrollo Farmacológico',
          points: [
            'Desarrollo de medicamentos: Se utilizan computadoras para estudiar enfermedades, analizar resultados de experimentos y desarrollar nuevos medicamentos.',
            'Estudio informático del ADN: Los científicos pueden utilizar programas informáticos para estudiar el ADN y buscar cambios genéticos relacionados con determinadas enfermedades.',
            'Cálculos ultra-complejos: Acelera hipótesis y simulaciones químicas que antes requerían décadas de pruebas manuales.'
          ],
          exampleTitle: 'Caso Práctico en Genética',
          exampleText: 'Software bioinformático que examina secuencias del ADN para identificar mutaciones vinculadas a enfermedades hereditarias.',
          statBadge: 'Investigación Científica'
        }
      },
      {
        id: 'c-t5i5-3',
        number: '03',
        title: 'Simulaciones Computacionales',
        summary: 'Modelos virtuales de situaciones difíciles o costosas de estudiar directamente: acción de medicamentos en el cuerpo y propagación de enfermedades.',
        iconName: 'FlaskConical',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Laboratorios Virtuales y Modelado Predictivo',
          points: [
            'Modelos virtuales sin riesgo: Permiten crear modelos virtuales de situaciones que serían difíciles o costosas de estudiar directamente.',
            'Farmacología computacional: Se puede simular cómo actúa un medicamento dentro del cuerpo humano antes de suministrarlo a pacientes.',
            'Modelado epidemiológico: Permite modelar matemáticamente cómo se propaga una enfermedad en una población y evaluar planes de salud pública.'
          ],
          exampleTitle: 'Caso Práctico en Simulación',
          exampleText: 'Simular la absorción celular de un fármaco o predecir la curva de contagio de un virus en una ciudad.',
          statBadge: 'Simulaciones'
        }
      },
      {
        id: 'c-t5i5-4',
        number: '04',
        title: 'Análisis Masivo de Datos',
        summary: 'Organización y análisis de información de miles de pacientes para encontrar patrones, factores de riesgo y evaluar la eficacia de tratamientos.',
        iconName: 'BarChart3',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Big Data Hospitalario y Medicina de Precisión',
          points: [
            'Patrones en grandes volúmenes: Las computadoras permiten organizar y analizar grandes cantidades de información para encontrar patrones y obtener conclusiones.',
            'Factores de riesgo poblacional: Un hospital puede analizar datos de miles de pacientes para conocer cuáles son los factores más relacionados con una enfermedad.',
            'Eficacia terapéutica: Evalúa objetivamente el éxito y la respuesta clínica de diferentes tratamientos médicos en el tiempo.'
          ],
          exampleTitle: 'Caso Práctico en Hospitales',
          exampleText: 'Analizar miles de expedientes clínicos para identificar factores determinantes y seleccionar el tratamiento más eficaz.',
          statBadge: 'Análisis de Datos'
        }
      }
    ]
  },
  {
    id: 'tema5-integrante6',
    themeCategory: 'Tema 5: La Computadora en Áreas del Saber',
    member: 'Arianna Ramirez (A00126080) — Educación y Humanidades',
    title: 'Computación en la',
    titleHighlight: 'Educación & Humanidades',
    description: 'La computación no solo transformó las ciencias exactas; también revolucionó la forma en que enseñamos, aprendemos y preservamos la cultura humana.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_t5_education.jpg',
    interactiveType: 'platforms',
    cards: [
      {
        id: 'c-t5i6-1',
        number: '01',
        title: 'Educación Virtual',
        summary: 'Enseñanza y aprendizaje a través de entornos digitales e internet sin compartir el mismo espacio físico: clases sincrónicas, asincrónicas y flexibilidad.',
        iconName: 'Laptop',
        badgeColor: 'blue',
        details: {
          subtitle: 'Entornos Digitales y Aprendizaje Sin Fronteras',
          points: [
            'Sin barreras físicas: Consiste en el desarrollo de procesos de enseñanza y aprendizaje a través de entornos digitales e internet, eliminando la necesidad de estar en un mismo espacio físico.',
            'Clases sincrónicas: Conexiones en tiempo real (como videollamadas) donde docentes y alumnos interactúan al instante.',
            'Clases asincrónicas: Materiales, foros y actividades disponibles 24/7 para que cada estudiante gestione su propio ritmo de aprendizaje.',
            'Flexibilidad permanente: Elimina las barreras geográficas y de horario, facilitando la educación continua.'
          ],
          exampleTitle: 'Caso Práctico en Educación Virtual',
          exampleText: 'Estudiantes conectándose en videollamada en vivo con el docente y revisando materiales y foros en cualquier horario.',
          statBadge: 'Educación Virtual'
        }
      },
      {
        id: 'c-t5i6-2',
        number: '02',
        title: 'Plataformas Educativas (LMS)',
        summary: 'Los LMS son el núcleo operativo del aula digital (Google Classroom, Moodle, Canvas, Blackboard) centralizando tareas, notas y comunicación.',
        iconName: 'GraduationCap',
        badgeColor: 'purple',
        details: {
          subtitle: 'Sistemas de Gestión del Aprendizaje (LMS)',
          points: [
            'Núcleo operativo: Los LMS (Learning Management Systems) son el núcleo operativo del aula digital.',
            'Ejemplos principales: Google Classroom, Moodle, Canvas y Blackboard.',
            'Centralización de entregas: Centralizan la entrega de tareas y proyectos con control de fechas.',
            'Evaluación y seguimiento: Gestión de exámenes, seguimiento de calificaciones y comunicación directa entre profesores y estudiantes.'
          ],
          exampleTitle: 'Sistemas LMS en Acción',
          exampleText: 'Google Classroom, Moodle, Canvas y Blackboard gestionando las asignaciones, foros y calificaciones escolares.',
          statBadge: 'Sistemas LMS'
        }
      },
      {
        id: 'c-t5i6-3',
        number: '03',
        title: 'Investigación y Bibliotecas Digitales',
        summary: 'Acceso democratizado a millones de libros y artículos en Google Scholar, JSTOR, Scopus y Project Gutenberg con software de análisis cualitativo.',
        iconName: 'Library',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Democratización del Conocimiento e Infraestructura Académica',
          points: [
            'Democratización del saber: El acceso al conocimiento académico se ha democratizado gracias a la infraestructura informática.',
            'Bases de datos mundiales: Plataformas como Google Scholar, JSTOR, Scopus y Project Gutenberg permiten acceder a millones de libros, artículos científicos y documentos académicos desde cualquier lugar.',
            'Procesamiento de datos en investigación: Los investigadores utilizan software especializado para analizar grandes volúmenes de texto, encuestas e información cualitativa de manera rápida y precisa.'
          ],
          exampleTitle: 'Bases de Datos Científicas',
          exampleText: 'Google Scholar, JSTOR, Scopus y Gutenberg brindando acceso instantáneo a la investigación mundial desde cualquier dispositivo.',
          statBadge: 'Bibliotecas Digitales'
        }
      },
      {
        id: 'c-t5i6-4',
        number: '04',
        title: 'Síntesis y Preservación Cultural',
        summary: 'Educación continua sin fronteras, plataformas integradas y preservación digital del legado humanístico para las futuras generaciones.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Resumen de Exposición de Arianna Ramirez',
          points: [
            '1. Educación Virtual: Procesos sincrónicos y asincrónicos flexibles sin limitaciones geográficas.',
            '2. Plataformas LMS: Google Classroom, Moodle, Canvas y Blackboard como columna del aula digital.',
            '3. Bibliotecas Digitales: Millones de fuentes en Google Scholar, JSTOR, Scopus y Gutenberg procesadas con software analítico.'
          ],
          exampleTitle: 'Mensaje Central de Arianna Ramirez',
          exampleText: '"La computación no solo transformó las ciencias exactas; también revolucionó la forma en que enseñamos, aprendemos y preservamos la cultura humana."',
          statBadge: 'Resumen Integrante 6'
        }
      }
    ]
  },
  {
    id: 'tema5-integrante7',
    themeCategory: 'Tema 5: La Computadora en Áreas del Saber',
    member: 'Integrante 7 — Negocios, ingeniería y otras áreas',
    title: 'Negocios, Ingeniería y',
    titleHighlight: 'Conexión del Saber',
    description: 'Sistemas ERP globales, trading algorítmico, diseño CAD/CAM con gemelos digitales y la computadora como puente interdisciplinario.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_t5_business.jpg',
    interactiveType: 'matrix',
    cards: [
      {
        id: 'c-t5i7-1',
        number: '01',
        title: 'Empresas y Gestión ERP',
        summary: 'Planificación integral de recursos (SAP, Oracle), logística autónoma y predicción de la demanda de mercado.',
        iconName: 'FileText',
        badgeColor: 'blue',
        details: {
          subtitle: 'La Empresa Digital Conectada',
          points: [
            'Integración en tiempo real de finanzas, inventarios y recursos humanos.',
            'Optimización algorítmica de cadenas de suministro y distribución global.',
            'Comercio digital con transacciones instantáneas a nivel planetario.'
          ],
          statBadge: 'Gestión ERP'
        }
      },
      {
        id: 'c-t5i7-2',
        number: '02',
        title: 'Finanzas y Banca Digital',
        summary: 'Trading de alta frecuencia (HFT) en microsegundos, scoring crediticio automatizado y detección de fraudes.',
        iconName: 'Lightbulb',
        badgeColor: 'purple',
        details: {
          subtitle: 'El Flujo Monetario a la Velocidad de la Luz',
          points: [
            'Ejecución algorítmica de órdenes en microsegundos en mercados bursátiles.',
            'Modelos de riesgo que evalúan solvencia con miles de variables.',
            'Banca móvil inclusiva que acerca servicios financieros a millones de personas.'
          ],
          statBadge: 'Fintech de Alta Precisión'
        }
      },
      {
        id: 'c-t5i7-3',
        number: '03',
        title: 'Ingeniería, Diseño y Ocio',
        summary: 'Software CAD/CAM, gemelos digitales, animación CGI, videojuegos AAA y plataformas de streaming.',
        iconName: 'Settings',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Ingeniería, Comunicación y Entretenimiento',
          points: [
            'Diseño paramétrico y arquitectónico con software CAD/CAM.',
            'Gemelos Digitales (Digital Twins): Proyectan fallas en turbinas y maquinarias antes de que ocurran.',
            'Comunicación y Entretenimiento: Motores gráficos 3D hiperrealistas, efectos CGI y streaming masivo en tiempo real.'
          ],
          statBadge: 'Ingeniería y Multimedia'
        }
      },
      {
        id: 'c-t5i7-4',
        number: '04',
        title: 'Conexión de Áreas del Saber',
        summary: 'Cómo la computadora actúa como el puente supremo que conecta e integra todas las áreas del conocimiento.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Convergencia e Integración Universal',
          points: [
            'Un médico usa simulaciones de ingenieros con modelos matemáticos y proyecciones de financiamiento.',
            'Un lingüista e historiador analiza manuscritos antiguos con algoritmos de visión y modelos de datos.',
            'La computadora es el instrumento unificador que potencia la sinergia interdisciplinaria de la ciencia humana.'
          ],
          statBadge: 'Conclusión Integrante 7'
        }
      }
    ]
  },
  {
    id: 'slide-minigame',
    themeCategory: 'Mini-Juego',
    member: 'Desafío Interactivo — Todos los Integrantes',
    title: 'Cyber Matrix:',
    titleHighlight: 'Desafío Clasificador',
    description: '¡Pon a prueba lo aprendido! Demuestra tu conocimiento clasificando aplicaciones del mundo real entre IA, Computación Clásica y Áreas del Saber.',
    quote: 'GRANDES IDEAS\nCOMIENZAN CON\nBUENAS PREGUNTAS',
    bgImage: '/assets/images/bg_minigame.jpg',
    interactiveType: 'game',
    cards: [
      {
        id: 'c-game-1',
        number: '01',
        title: 'Desafío Clasificador',
        summary: 'Responde 8 casos prácticos con multiplicadores de combo y retroalimentación inmediata.',
        iconName: 'FileText',
        badgeColor: 'blue',
        details: {
          subtitle: 'Reglas del Desafío',
          points: [
            '8 preguntas y casos del mundo real.',
            'Acumula puntos y mantén tu racha de combos (Cyber Streak).',
            'Feedback sonoro futurista y efectos visuales de partículas.'
          ],
          statBadge: 'Modo Trivia Ágil'
        }
      },
      {
        id: 'c-game-2',
        number: '02',
        title: 'Simulador Neuronal',
        summary: 'Laboratorio en vivo para calibrar hiperparámetros de inferencia.',
        iconName: 'Lightbulb',
        badgeColor: 'purple',
        details: {
          subtitle: 'Laboratorio de Aprendizaje Práctico',
          points: [
            'Activa neuronas de entrada con clics.',
            'Visualiza la activación matemática con gradientes de color.'
          ],
          statBadge: 'Simulador en Vivo'
        }
      },
      {
        id: 'c-game-3',
        number: '03',
        title: 'Sistema de Puntuación',
        summary: 'Gana medallas según tu velocidad y precisión técnica.',
        iconName: 'Settings',
        badgeColor: 'cyan',
        details: {
          subtitle: 'Escala de Puntuación',
          points: [
            '100 puntos base por respuesta correcta.',
            'Bonus de racha multiplicador.'
          ],
          statBadge: 'Marcador'
        }
      },
      {
        id: 'c-game-4',
        number: '04',
        title: 'Celebración Cyber',
        summary: 'Lluvia de confeti cibernético 3D y fanfarria al completar la evaluación.',
        iconName: 'BookOpen',
        badgeColor: 'magenta',
        details: {
          subtitle: 'Victoria del Desafío',
          points: [
            'Celebración con confeti al completar.',
            'Opción de reiniciar para mejorar puntuación.'
          ],
          statBadge: 'Recompensa'
        }
      }
    ]
  }
];

export const GAME_QUESTIONS = [
  {
    id: 1,
    prompt: 'Un sistema analiza 50,000 radiografías pulmonares y aprende a detectar nódulos cancerígenos con 98% de precisión.',
    category: 'Medicina & Visión Artificial',
    options: ['Computadora Tradicional (Reglas if/else)', 'IA Débil / Especializada (Deep Learning)', 'IA General (AGI)', 'ERP Empresarial'],
    correctIndex: 1,
    explanation: 'Es IA débil/especializada: utiliza redes neuronales convolucionales entrenadas para una tarea médica precisa y crítica.',
    icon: 'Activity'
  },
  {
    id: 2,
    prompt: 'Un programa calcula la nómina mensual multiplicando las horas trabajadas por el salario base y aplicando deducciones legales.',
    category: 'Fundamentos de Cómputo',
    options: ['IA Generativa', 'Computadora Tradicional (Determinista)', 'IA General', 'Aprendizaje por Refuerzo'],
    correctIndex: 1,
    explanation: 'Es computación tradicional: sigue un conjunto fijo de reglas matemáticas y lógicas predefinidas sin necesidad de aprender.',
    icon: 'Binary'
  },
  {
    id: 3,
    prompt: 'Una herramienta a la que le pides: "Escribe un soneto barroco sobre la computación cuántica" y produce versos originales en segundos.',
    category: 'Inteligencia Artificial',
    options: ['IA Débil de Ajedrez', 'IA Generativa (LLM)', 'Hoja de Cálculo', 'Computación en Medicina'],
    correctIndex: 1,
    explanation: 'Es IA Generativa: modelos de lenguaje como GPT o Gemini que generan contenido original a partir de asociaciones probabilísticas aprendidas.',
    icon: 'Wand2'
  },
  {
    id: 4,
    prompt: 'La tecnología AlphaFold predice la estructura tridimensional de más de 200 millones de proteínas a partir de secuencias de aminoácidos.',
    category: 'Computación en Ciencias',
    options: ['Simulaciones Científicas con IA', 'Banca y Finanzas HFT', 'Biblioteca Digital', 'Traducción Humana Manual'],
    correctIndex: 0,
    explanation: 'AlphaFold combina Deep Learning con simulación biofísica para resolver el histórico problema del plegamiento de proteínas.',
    icon: 'Dna'
  },
  {
    id: 5,
    prompt: 'Una réplica digital virtual de una turbina de avión Boeing que recibe datos de sensores en vuelo para predecir fallas antes de que ocurran.',
    category: 'Ingeniería y Diseño',
    options: ['Gemelo Digital (Digital Twin)', 'Chatbot Educativo', 'Filtro Anti-spam', 'Hoja de Vida'],
    correctIndex: 0,
    explanation: 'Un Gemelo Digital (Digital Twin) conecta un objeto físico con su simulación computacional paramétrica en tiempo real.',
    icon: 'Wrench'
  },
  {
    id: 6,
    prompt: 'Un sistema bancario que analiza miles de transacciones por milisegundo y bloquea una tarjeta si el patrón de compra es inusual.',
    category: 'Finanzas & Negocios',
    options: ['Cine CGI', 'Detección de Fraude con Machine Learning', 'Educación Virtual Asíncrona', 'Compilador C++'],
    correctIndex: 1,
    explanation: 'Los sistemas fintech utilizan modelos de detección de anomalías para identificar comportamientos fraudulentos en milisegundos.',
    icon: 'Coins'
  },
  {
    id: 7,
    prompt: 'La digitalización de códices medievales con OCR y el descifrado asistido por computadora de tablillas cuneiformes sumerias.',
    category: 'Humanidades Digitales',
    options: ['Humanidades Digitales e Historia', 'Superinteligencia Artificial', 'Trading de Alta Frecuencia', 'Videojuegos AAA'],
    correctIndex: 0,
    explanation: 'Las Humanidades Digitales aplican herramientas computacionales al estudio filológico, arqueológico e histórico de la humanidad.',
    icon: 'Library'
  },
  {
    id: 8,
    prompt: 'Un robot de aspiradora que explora una casa, choca contra una pared, registra un mapa por LiDAR y ajusta su trayectoria para maximizar el área limpia.',
    category: 'Mecanismos de IA',
    options: ['Aprendizaje y Navegación Autónoma', 'Computadora Analógica de 1940', 'IA General Omnisciente', 'Biblioteca Universitaria'],
    correctIndex: 0,
    explanation: 'Utiliza algoritmos SLAM (Localización y Mapeo Simultáneo) y lógica adaptativa para interactuar de forma autónoma con su entorno.',
    icon: 'Sparkles'
  }
];
