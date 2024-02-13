'use client'

import { useState, useEffect } from 'react';
import { Heart2 } from './Heart.jsx';
import { usePathname } from 'next/navigation.js';

const getRandomPosition = (min, max) => Math.random() * (max - min) + min;

const HeartsBackground = () => {
  const pathname = usePathname()
  const [hearts, setHearts] = useState([]);
  const [exclusionZone, setExclusionZone] = useState(null);
  const numberOfHearts = 15;

  useEffect(() => {
    const container = document.querySelector('main');
    const exclusionElement = pathname !== '/acepto' 
      ? document.querySelector('.text') 
      : document.querySelector('.form');

    // Obtener el rectángulo de la zona de exclusión
    const exclusionZoneRect = exclusionElement.getBoundingClientRect();
    
    // Ajustar los límites del rectángulo con un margen de 20px a los bordes
    const exclusionRect = {
      top: exclusionZoneRect.top - 70, // Agregar 50px de margen extra en la parte superior
      left: exclusionZoneRect.left - 20,
      bottom: exclusionZoneRect.bottom + 70, // Agregar 50px de margen extra en la parte inferior
      right: exclusionZoneRect.right + 50 // Agregar 50px al borde derecho
    };
    
    setExclusionZone(exclusionRect);
    
    // Generar corazones evitando la zona de exclusión
    const generateHearts = () => {
      const newHearts = [];
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      for (let i = 0; i < numberOfHearts; i++) {
        let left, top;
        let isOverlapping = false;

        do {
          isOverlapping = false; // Reiniciar la bandera antes de cada intento de posición
          left = getRandomPosition(50, containerWidth - 50);
          top = getRandomPosition(50, containerHeight - 50);

          // Verificar si la nueva posición se superpone con algún corazón existente
          for (let j = 0; j < newHearts.length; j++) {
            const existingHeart = newHearts[j];
            if (
              left > existingHeart.left - 50 && left < existingHeart.left + 50 &&
              top > existingHeart.top - 50 && top < existingHeart.top + 50
            ) {
              isOverlapping = true;
              break;
            }
          }
        } while (
          isOverlapping || // Si la nueva posición se superpone con algún corazón existente
          (left > exclusionRect.left && left < exclusionRect.right && // O se superpone con la zona de exclusión
          top > exclusionRect.top && top < exclusionRect.bottom)
        );

        newHearts.push({ left, top });
      }

      setHearts(newHearts);
    };

    generateHearts();
  }, [numberOfHearts]);

  return (
    <>
      {hearts.map((heart, index) => (
        <Heart2 
          key={index} 
          left={heart.left} 
          top={heart.top} 
        />
      ))}
    </>
  );
};

export default HeartsBackground;

