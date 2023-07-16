---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Inductancia**

### **Conceptos y Principios:**
Cuando la corriente en una espira de alambre cambia con el tiempo, se induce una fem en la espira de acuerdo con la ley de Faraday. La fem autoinducida es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">&#x3b5;</mi><mi mathvariant="normal">L</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mo>-</mo><mi mathvariant="normal">L</mi><mfrac><mi mathvariant="normal">dI</mi><mi mathvariant="normal">dt</mi></mfrac></math>
</div>

donde L es la inductancia de la espira. La inductancia es una medida de cuánta oposición ofrece la espira a un cambio en la corriente en la espira. La inductancia tiene la unidad SI de henry (H) (1H=1V.s/A).

La inductancia de cualquier bobina es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">L</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">N</mi><msubsup><mi mathvariant="normal">&#x3a6;</mi><mi mathvariant="normal">B</mi><mo>&#xA0;</mo></msubsup></mrow><mi mathvariant="normal">I</mi></mfrac></math>
</div>

Donde N es el número total de vueltas y <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">&#x3a6;</mi><mi mathvariant="normal">B</mi><mo>&#xA0;</mo></msubsup></math> es el flujo magnético a través de la bobina. La inductancia de un dispositivo depende de su geometría. Por ejemplo, la inductancia de un solenoide con núcleo de aire es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">L</mi><mo>=</mo><msubsup><mi mathvariant="normal">&#x3bc;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup><mfrac><mrow><msubsup><mi mathvariant="normal">N</mi><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow><mi mathvariant="script">l</mi></mfrac><mi mathvariant="normal">A</mi></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="script">l</mi></math> es la longitud del solenoide y A es el área de sección transversal.

Si un resistor y un inductor se conectan en serie a una batería de fem <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3b5;</mi></math> en el tiempo t=0, la corriente en el circuito varía en el tiempo de acuerdo con la expresión:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">I</mi><mo>=</mo><mfrac><mi mathvariant="normal">&#x3b5;</mi><mi mathvariant="normal">R</mi></mfrac><mo>(</mo><mn>1</mn><mo>-</mo><msubsup><mi mathvariant="normal">e</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi mathvariant="normal">t</mi><mo>/</mo><mi mathvariant="normal">&#x3c4;</mi></mrow></msubsup><mo>)</mo></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3c4;</mi></math>=L/R es la **constante de tiempo** del circuito RL. Si se sustituye la batería en el circuito por un alambre sin resistencia, la corriente decae exponencialmente con el tiempo de acuerdo con la expresión:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">I</mi><mo>=</mo><mfrac><mi mathvariant="normal">&#x3b5;</mi><mi mathvariant="normal">R</mi></mfrac><msubsup><mi mathvariant="normal">e</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi mathvariant="normal">t</mi><mo>/</mo><mi mathvariant="normal">&#x3c4;</mi></mrow></msubsup></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3b5;</mi></math>/R es la corriente inicial en el circuito.

La energía almacenada en el campo magnético de un inductor que porta una corriente I es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi mathvariant="normal">LI</mi><mo>&#xA0;</mo><mn>2</mn></msubsup></math>
</div>

Esta energía es la contraparte magnética de la energía almacenada en el campo eléctrico de un capacitor cargado.

La densidad de energía en un punto donde el campo magnético es B es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">u</mi><mi mathvariant="normal">B</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi mathvariant="normal">B</mi><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><msubsup><mi mathvariant="normal">&#x3bc;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac></math>
</div>

La **inductancia mutua** de un sistema de dos bobinas es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">M</mi><mn>12</mn><mo>&#xA0;</mo></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi mathvariant="normal">N</mi><mn>2</mn><mo>&#xA0;</mo></msubsup><msubsup><mi mathvariant="normal">&#x3a6;</mi><mn>12</mn><mo>&#xA0;</mo></msubsup></mrow><mrow><msubsup><mi mathvariant="normal">I</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></mrow></mfrac><mo>=</mo><msubsup><mi mathvariant="normal">M</mi><mn>21</mn><mo>&#xa0;</mo></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi mathvariant="normal">N</mi><mn>1</mn><mo>&#xa0;</mo></msubsup><msubsup><mi mathvariant="normal">&#x3a6;</mi><mn>21</mn><mo>&#xa0;</mo></msubsup></mrow><mrow><msubsup><mi mathvariant="normal">I</mi><mn>2</mn><mo>&#xa0;</mo></msubsup></mrow></mfrac><mo>=</mo><mi>M</mi></math>
</div>

Esta inductancia mutua permite relacionar la fem inducida en una bobina con la fuente de corriente cambiante en una bobina cercana usando las correspondencias:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3b5;</mi><mn>2</mn><mo>&#xA0;</mo></msubsup><mo>=</mo><mo>-</mo><msubsup><mi>M</mi><mn>12</mn><mo>&#xA0;</mo></msubsup><mfrac><mrow><mi>d</mi><msubsup><mi>I</mi><mn>1</mn><mo>&#xA0;</mo></msubsup></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></math>
</div>

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3b5;</mi><mn>1</mn><mo>&#xa0;</mo></msubsup><mo>=</mo><mo>-</mo><msubsup><mi>M</mi><mn>21</mn><mo>&#xa0;</mo></msubsup><mfrac><mrow><mi>d</mi><msubsup><mi>I</mi><mn>2</mn><mo>&#xa0;</mo></msubsup></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></math>
</div>

En un circuito LC que tenga resistencia cero y no radie electromagnéticamente (una idealización), los valores de la carga en el capacitor y la corriente en el circuito varían sinusoidalmente en el tiempo con una frecuencia angular conocida por:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c9;</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mfrac></math>
</div>

La energía en un circuito LC se transfiere de manera continua entre la energía almacenada en el capacitor y la energía almacenada en el inductor.

En un circuito RLC con pequeña resistencia, la carga en el capacitor varía con el tiempo de acuerdo con:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>Q</mi><mo>=</mo><msubsup><mi>Q</mi><mrow><mi>m</mi><mi>&#xe1;</mi><mi>x</mi></mrow><mo>&#xA0;</mo></msubsup><msubsup><mi>e</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi>R</mi><mi>t</mi><mo>/</mo><mn>2</mn><mi>L</mi></mrow></msubsup><mi>cos</mi><mfenced><mrow><msubsup><mi>&#x3c9;</mi><mi>d</mi><mo>&#xA0;</mo></msubsup><mi>t</mi></mrow></mfenced></math>
</div>

Donde:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3c9;</mi><mi>d</mi><mo>&#xa0;</mo></msubsup><mo>=</mo><msubsup><mfenced open="[" close="]"><mrow><mfrac><mn>1</mn><mrow><mi>L</mi><mi>C</mi></mrow></mfrac><mo>-</mo><msubsup><mfenced><mfrac><mi>R</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac></mfenced><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow></mfenced><mo>&#xA0;</mo><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msubsup></math>
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
    font-size: 20px;
    color: var(--primary-color)
  }
</style>