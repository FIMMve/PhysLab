---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Capacitancia y Materiales Dieléctricos**

### **Definiciones:**
Un **capacitor** consiste en dos conductores que portan cargas de igual magnitud y signo opuesto. La **capacitancia** C de cualquier capacitor es la relación de la carga Q sobre cualquier conductor, a la diferencia de potencial <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><mi>V</mi></math> entre ellos:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>C</mi><mo>&#x2261;</mo><mfrac><mi>Q</mi><mrow><mi>&#x394;</mi><mi>V</mi></mrow></mfrac></math>
</div>

La capacitancia sólo depende de la geometría de los conductores y no de una fuente externa de carga o diferencia de potencial. La unidad para la capacitancia es 1F = 1C/V.

El **momento de dipolo eléctrico** <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi>p</mi><mo>&#x2192;</mo></mover></math>, de un dipolo eléctrico tiene una magnitud:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi><mo>&#x2261;</mo><mn>2</mn><mi>a</mi><mi>q</mi></math>
</div>

Donde 2a es la distancia entre las cargas q y -q. La dirección del vector momento de dipolo eléctrico es desde la carga negativa hacia la carga positiva.

### **Conceptos y Principios:**
Si dos o más capacitores se conectan en paralelo, la diferencia de potencial es la misma a través de todos los capacitores. La capacitancia equivalente de una **combinación en paralelo** de capacitores es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>C</mi><mrow><mi>e</mi><mi>q</mi></mrow><mo>&#xA0;</mo></msubsup><mo>=</mo><msubsup><mi>C</mi><mn>1</mn><mo>&#xA0;</mo></msubsup><mo>+</mo><msubsup><mi>C</mi><mn>2</mn><mo>&#xA0;</mo></msubsup><mo>+</mo><msubsup><mi>C</mi><mn>3</mn><mo>&#xA0;</mo></msubsup><mo>+</mo><mo>.</mo><mo>.</mo><mo>.</mo></math>
</div>

Si dos o más capacitores se conectan en serie, la carga es la misma en todos los capacitores, y la capacitancia equivalente de la **combinación en serie** se conoce por:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mrow><msubsup><mi>C</mi><mrow><mi>e</mi><mi>q</mi></mrow><mo>&#xA0;</mo></msubsup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msubsup><mi>C</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><msubsup><mi>C</mi><mn>2</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><msubsup><mi>C</mi><mn>3</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac><mo>+</mo><mo>.</mo><mo>.</mo><mo>.</mo></math>
</div>

Estas dos ecuaciones le permiten simplificar muchos circuitos eléctricos al sustituir múltiples capacitores con una sola capacitancia equivalente.

En un capacitor se almacena energía porque el proceso de carga es equivalente a la transferencia de cargas de un conductor con un potencial eléctrico más bajo, a otro conductor con un potencial más alto. La energía almacenada en un capacitor con carga Q es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>U</mi><mo>=</mo><mfrac><mrow><msubsup><mi>Q</mi><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mi>C</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>Q</mi><mi>&#x394;</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>C</mi><msubsup><mfenced><mrow><mi>&#x394;</mi><mi>V</mi></mrow></mfenced><mo>&#xA0;</mo><mn>2</mn></msubsup></math>
</div>

Cuando un material dieléctrico se inserta entre las placas de un capacitor, la capacitancia aumenta por un factor adimensional k, llamado **constante dieléctrica**:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>C</mi><mo>=</mo><mi>k</mi><msubsup><mi>C</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>C</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math> es la capacitancia en ausencia del dieléctrico.

El momento de torsión que actúa sobre un dipolo eléctrico en un campo eléctrico uniforme <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi>E</mi><mo>&#x2192;</mo></mover></math> es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi>&#x3c4;</mi><mo>&#x2192;</mo></mover><mo>=</mo><mover accent='true'><mi>p</mi><mo>&#x2192;</mo></mover><mo>&#xd7;</mo><mover accent='true'><mi>E</mi><mo>&#x2192;</mo></mover></math>
</div>

La energía potencial del sistema de un dipolo eléctrico en un campo eléctrico externo uniforme <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi>E</mi><mo>&#x2192;</mo></mover></math> es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>U</mi><mo>=</mo><mo>-</mo><mover accent='true'><mi>p</mi><mo>&#x2192;</mo></mover><mo>.</mo><mover accent='true'><mi>E</mi><mo>&#x2192;</mo></mover></math>
</div>

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
    font-size: 25px;
    color: var(--primary-color)
  }
</style>