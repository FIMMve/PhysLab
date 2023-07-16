---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Ley de Gauss**

### **Definiciones:**
El **Flujo Eléctrico** es proporcional al número de líneas de campo eléctrico que penetran una superficie. Si el campo eléctrico es uniforme y forma un ángulo <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3b8;</mi></math> con la normal a una superficie de área A, el flujo eléctrico a través de la superficie es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3d5;</mi><mi>E</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mi>E</mi><mi>A</mi><mi>cos</mi><mfenced><mi>&#x3b8;</mi></mfenced></math>
</div>

En general, el flujo eléctrico a través de una superficie es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3d5;</mi><mi>E</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><munderover accent='false' accentunder='false'><mo>&#x222b;</mo><mrow><mi>s</mi><mi>u</mi><mi>p</mi><mi>e</mi><mi>r</mi><mi>f</mi><mi>i</mi><mi>c</mi><mi>i</mi><mi>e</mi></mrow><mo>&#xA0;</mo></munderover><mover accent='true'><mi>E</mi><mo>&#x21c0;</mo></mover><mo>&#xb7;</mo><mi>d</mi><mover accent='true'><mi>A</mi><mo>&#x21c0;</mo></mover></math>
</div>

### **Conceptos y Principios:**
La **Ley de Gauss** dice que el flujo eléctrico neto <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3d5;</mi><mi>E</mi><mo>&#xA0;</mo></msubsup></math> a través de cualquier superficie gaussiana cerrada es igual a la carga neta <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>q</mi><mrow><mi>i</mi><mi>n</mi></mrow><mo>&#xA0;</mo></msubsup></math> dentro de la superficie, dividida por <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3f5;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math>:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3d5;</mi><mi>E</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mo>&#x222e;</mo><mover accent='true'><mi>E</mi><mo>&#x21c0;</mo></mover><mo>&#xb7;</mo><mi>d</mi><mover accent='true'><mi>A</mi><mo>&#x21c0;</mo></mover><mo>=</mo><mfrac><mrow><msubsup><mi>q</mi><mrow><mi>i</mi><mi>n</mi></mrow><mo>&#xA0;</mo></msubsup></mrow><mrow><msubsup><mi>&#x3f5;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac></math>
</div>

Al usar la ley de Gauss, se puede calcular el campo eléctrico debido a varias distribuciones de carga simétrias.

Un conductor en **Equilibrio Electrostático** tiene las siguientes propiedades:

- El campo eléctrico es cero en todas partes dentro del conductor, ya sea que el conductor sea sólido o hueco.
- Si un conductor aislado tiene una carga, la carga reside en su superficie.
- El campo eléctrico justo afuera de un conductor con carga es perpendicular a la superficie del conductor y tiene una magnitud <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c3;</mi><mo>/</mo><msubsup><mi>&#x3f5;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math>, donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c3;</mi></math> es la densidad de carga superficial en dicho punto.
- En un conductor con forma irregular, la densidad de carga superficial es mayor en posiciones donde el radio de curvatura de la superficie es más pequeño.

<style>
  h2{
    color: var(--primary-color);
    width: 100%;
    text-align: left;
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 700;
  }
  h3{
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color)
  }
  p{
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    font-weight: 400;
    color: var(--snd-font-color)
  }
  ul{
    width: 90%;
    margin: 0 0 20px 0;
  }
  li{
    margin-top: 5px;
  }
  math{
    font-weight: 500;
    font-size: 20px;
  }
  mi,
  mo,
  msubsup,
  mfrac,
  mrow,
  mn{
    margin: 1px;
  }
  .img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 10px;
		background-color: var(--snd-bg-color);
    border-radius: 10px;
    margin: 15px 0 30px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 300ms ease-in-out;
  }
  .img-container:hover{
    transform: scale(1.07);
    border: 1px solid var(--primary-color)
  }
  .img-container img{
    max-width: 90%;
    border-radius: 10px;
  }
  .img-container math{
    font-size: 30px;
    color: var(--primary-color)
  }
</style>