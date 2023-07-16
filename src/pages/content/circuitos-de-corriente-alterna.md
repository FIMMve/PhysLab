---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Circuitos de Corriente Alterna**

### **Definiciones:**
En los circuitos de CA que contienen inductores y capacitores, es útil definir la **reactancia inductiva** <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup></math> y la reactancia capacitiva <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup></math> como:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup><mo>&#x2261;</mo><mi mathvariant="normal">&#x3c9;</mi><mi mathvariant="normal">L</mi></math>
</div>

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant="normal">&#x3c9;</mi><mi mathvariant="normal">C</mi></mrow></mfrac></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3c9;</mi></math> es la frecuencia angular de la fuente de CA. La unidad del SI para reactancia es el ohm.

La **impedancia** Z de un circuito de CA RLC en serie es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">Z</mi><mo>=</mo><msqrt><mrow><msubsup><mi mathvariant="normal">R</mi><mo>&#xA0;</mo><mn>2</mn></msubsup><mo>+</mo><mo>(</mo><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup><mo>-</mo><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup><msubsup><mo>)</mo><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow></msqrt></math>
</div>

Esta expresión ilustra que no es posible sumar simplemente la resistencia y las reactancias en un circuito. Se debe explicar el voltaje aplicado y la corriente que están fuera de fase, con el ángulo de fase <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3d5;</mi></math> entre la corriente y el voltaje como:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3d5;</mi><mo>=</mo><msup><mi>tan</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mfrac><mrow><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup><mo>-</mo><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup></mrow><mi mathvariant="normal">R</mi></mfrac></mfenced></math>
</div>

El signo de <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3d5;</mi></math> puede ser positivo o negativo, dependiendo de si <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup></math> es mayor o menor que <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup></math> El ángulo de fase es cero cuando <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup><mo>-</mo><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup></math>.

### **Conceptos y Principios:**
La corriente rms y el voltaje rms en un circuito de CA en el que los voltajes y la corriente varían senoidalmente se conocen por:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">I</mi><mi mathvariant="normal">rms</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi mathvariant="normal">I</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">&#xe1;</mi><mi mathvariant="normal">x</mi></mrow><mo>&#xA0;</mo></msubsup></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>=</mo><msubsup><mn>0.7071</mn><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">&#xe1;</mi><mi mathvariant="normal">x</mi></mrow><mo>&#xA0;</mo></msubsup></math>
</div>

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x394;</mi><msubsup><mi mathvariant="normal">V</mi><mi mathvariant="normal">rms</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mrow><mi mathvariant="normal">&#x394;</mi><msubsup><mi mathvariant="normal">V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">&#xe1;</mi><mi mathvariant="normal">x</mi></mrow><mo>&#xa0;</mo></msubsup></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>=</mo><mn>0.707</mn><mi mathvariant="normal">&#x394;</mi><msubsup><mi mathvariant="normal">V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">&#xe1;</mi><mi mathvariant="normal">x</mi></mrow><mo>&#xa0;</mo></msubsup></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">I</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">&#xe1;</mi><mi mathvariant="normal">x</mi></mrow><mo>&#xA0;</mo></msubsup></math> y <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x394;</mi><msubsup><mi mathvariant="normal">V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">&#xe1;</mi><mi mathvariant="normal">x</mi></mrow><mo>&#xa0;</mo></msubsup></math> son los valores máximos.

Si un circuito de CA consiste en una fuente y un resistor, la corriente está en fase con el voltaje. Es decir, la corriente y el voltaje alcanzan sus valores máximos al mismo tiempo. 

Si un circuito de CA consiste en una fuente y un inductor, la corriente se atrasa al voltaje por 90°. Es decir, el voltaje llega a su valor máximo un cuarto de periodo antes que la corriente alcance su valor máximo.

Si un circuito de CA consiste en una fuente y un capacitor, la corriente se adelante al voltaje por 90°. Es decir, la corriente alcanza su valor máximo un cuarto de periodo antes que el voltaje alcance su valor máximo.

La **potencia promedio** entregada por la fuente en un circuito RLC es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="script">P</mi><mi mathvariant="normal">prom</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><msubsup><mi mathvariant="normal">I</mi><mi mathvariant="normal">rms</mi><mo>&#xA0;</mo></msubsup><mi mathvariant="normal">&#x394;</mi><msubsup><mi mathvariant="normal">V</mi><mi mathvariant="normal">rms</mi><mo>&#xA0;</mo></msubsup><mi>cos</mi><mfenced><mi mathvariant="normal">&#x3d5;</mi></mfenced></math>
</div>

Una expresión equivalente para la potencia promedio es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="script">P</mi><mi mathvariant="normal">prom</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><msubsup><mi mathvariant="normal">I</mi><mi mathvariant="normal">rms</mi><mn>2</mn></msubsup><mi mathvariant="normal">R</mi></math>
</div>

La potencia promedio entregada por la fuente resulta en una energía interna creciente en el resistor. En un inductor o capacitor ideal no se presenta pérdida de potencia.

La corriente rms en un circuito RLC en serie es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">I</mi><mi mathvariant="normal">rms</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mrow><mi mathvariant="normal">&#x394;</mi><msubsup><mi mathvariant="normal">V</mi><mi mathvariant="normal">rms</mi><mo>&#xA0;</mo></msubsup></mrow><msqrt><mrow><msubsup><mi mathvariant="normal">R</mi><mo>&#xA0;</mo><mn>2</mn></msubsup><mo>+</mo><mo>(</mo><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup><mo>-</mo><msubsup><mi mathvariant="normal">X</mi><mi mathvariant="normal">C</mi><mo>&#xA0;</mo></msubsup><msubsup><mo>)</mo><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow></msqrt></mfrac></math>
</div>

Un circuito RLC en serie está en resonancia cuando la reactancia inductiva es igual a la reactancia capacitiva. Cuando se satisface esta condición, la corriente rms conocida por la ecuación 33.34 tiene su valor máximo. La **frecuencia de resonancia** <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3c9;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math> del circuito es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3c9;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mfrac></math>
</div>

La corriente rms en un circuito RLC en serie tiene su valor máximo cuando la frecuencia de la fuente es igual a <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3c9;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math>, es decir, cuando la frecuencia “impulsora” iguala la frecuencia de resonancia.

Los **transformadores de CA** permiten cambios fáciles en voltaje alterno de acuerdo con:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><msubsup><mi mathvariant="script">v</mi><mn>2</mn><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi>N</mi><mn>2</mn><mo>&#xA0;</mo></msubsup></mrow><mrow><msubsup><mi>N</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac><mi>&#x394;</mi><msubsup><mi mathvariant="script">v</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>N</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></math> y <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>N</mi><mn>2</mn><mo>&#xA0;</mo></msubsup></math> son los números de devanados en las bobinas primaria y secundaria,
respectivamente, y <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><msubsup><mi mathvariant="script">v</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></math> y <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><msubsup><mi mathvariant="script">v</mi><mn>2</mn><mo>&#xA0;</mo></msubsup></math> son los voltajes en estas bobinas.

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
    font-size: 20px;
    color: var(--primary-color)
  }
</style>