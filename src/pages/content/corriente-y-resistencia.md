---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Capacitancia y Materiales Dieléctricos**

### **Definiciones:**
La **Corriente Eléctrica I** en un conductor se define como:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>I</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>Q</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></math>
</div>

Donde dQ es la carga que pasa a través de una sección transversal del conductor en un intervalo de tiempo dt. La unidad correspondiente es el **Ampere** (1A = 1C/s).

La **Densidad de Corriente J** en un conductor es la corriente por unidad de área:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></math>
</div>

La **Resistencia R** de un conductor se define como:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>R</mi><mo>&#x2261;</mo><mfrac><mrow><mi>&#x394;</mi><mi>V</mi></mrow><mi>I</mi></mfrac></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><mi>V</mi></math> es la diferencia de potencial a través de él e <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>I</mi></math> es la corriente que conduce. La unidad para la resistencia es Ohm <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3a9;</mi></math>. (1<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3a9;</mi></math>=1V/A)

### **Conceptos y Principios:**
La corriente promedio de un conductor se relaciona con el movimiento de los portadores de carga mediante la correspondencia:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>I</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>m</mi></mrow><mo>&#xA0;</mo></msubsup><mo>=</mo><mi>n</mi><mi>q</mi><msubsup><mi>v</mi><mi>d</mi><mo>&#xA0;</mo></msubsup><mi>A</mi></math>
</div>

Donde n es la densidad de portadores de carga, q es la carga en cada portador, <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>v</mi><mi>d</mi><mo>&#xA0;</mo></msubsup></math> es la rapidez de arrastre y A es el área de sección transversal del conductor.

La densidad de corriente en un conductor óhmico es proporcional al campo eléctrico de acuerdo con la expresión:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>J</mi><mo>=</mo><mi>&#x3c3;</mi><mi>E</mi></math>
</div>

La constante de proporcionalidad <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c3;</mi></math> es la **conductividad** del material del conductor.El inverso de <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c3;</mi></math> se conoce como **resistividad** p (<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>p</mi><mo>=</mo><mn>1</mn><mo>/</mo><mi>&#x3c3;</mi></math>). La ecuación anterior se conoce como **Ley de Ohm**, y un material obedece esta ley si la relación de su densidad de corriente a su campo eléctrico aplicado es una constante independiente del campo aplicado.

Para un bloque uniforme de material, con área de sección transversal A y longitud <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="script">l</mi></math>, la resistencia en toda la longitud <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="script">l</mi></math> es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>R</mi><mo>=</mo><mi>p</mi><mfrac><mi mathvariant="script">l</mi><mi>A</mi></mfrac></math>
</div>

Donde p es la resistividad del material.

En un modelo clásico de conducción eléctrica en metales, los electrones se tratan como moléculas de un gas. En ausencia de un campo eléctrico, la velocidad promedio de los electrones es cero. Cuando se aplica un campo eléctrico, los electrones se mueven con una **velocidad de arrastre** <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mrow><msubsup><mi>V</mi><mi>d</mi><mo>&#xA0;</mo></msubsup></mrow><mo>&#x2192;</mo></mover></math> que es opuesta al campo eléctrico. La velocidad de arrastre está dada por:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mrow><msubsup><mi>V</mi><mi>d</mi><mo>&#xA0;</mo></msubsup></mrow><mo>&#x2192;</mo></mover><mo>=</mo><mfrac><mrow><mi>q</mi><mover accent='true'><mi>E</mi><mo>&#x2192;</mo></mover></mrow><mrow><msubsup><mi>m</mi><mi>e</mi><mo>&#xA0;</mo></msubsup></mrow></mfrac><mi>&#x3c4;</mi></math>
</div>

donde q es la carga del electrón, <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>m</mi><mi>e</mi><mo>&#xA0;</mo></msubsup></math> es la masa del electrón y <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c4;</mi></math> es el intervalo de tiempo promedio entre colisiones electrón-átomo. De acuerdo con este modelo, la resistividad del metal es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c1;</mi><mo>=</mo><mfrac><mrow><msubsup><mi>m</mi><mi>e</mi><mo>&#xA0;</mo></msubsup></mrow><mrow><mi>n</mi><msubsup><mi>q</mi><mo>&#xA0;</mo><mn>2</mn></msubsup><mi>&#x3c4;</mi></mrow></mfrac></math>
</div>

Donde n es el número de electrones libres por unidad de volumen.

La resistividad de un conductor varía de manera aprocimadamente lineal con la temperatura, de acuerdo con la expresión:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3c1;</mi><mo>=</mo><msubsup><mi>&#x3c1;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup><mo>[</mo><mn>1</mn><mo>+</mo><mi>&#x3b1;</mi><mo>(</mo><mi>T</mi><mo>-</mo><msubsup><mi>T</mi><mn>0</mn><mo>&#xA0;</mo></msubsup><mo>)</mo><mo>]</mo></math>
</div>

donde <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x3c1;</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math> es la resistividad a cierta temperatura de referencia <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>T</mi><mn>0</mn><mo>&#xA0;</mo></msubsup></math> y <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x3b1;</mi></math> es el **coeficiente de temperatura de resistividad**.

Si a través de un elemento de circuito se mantiene una diferencia de potencial <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><mi>V</mi></math>, la **potencia**, o proporción a la que se suministra energía al elemento, es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="script">P</mi><mo>=</mo><mi>I</mi><mi>&#x394;</mi><mi>V</mi></math>
</div>

Ya que la diferencia de potencial a través de un resistor es conocido por <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></math>, la potencia entregada al resistor se expresa como:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="script">P</mi><mo>=</mo><msubsup><mi>I</mi><mo>&#xA0;</mo><mn>2</mn></msubsup><mi>R</mi><mo>=</mo><mfrac><mrow><msubsup><mfenced><mrow><mi>&#x394;</mi><mi>V</mi></mrow></mfenced><mo>&#xA0;</mo><mn>2</mn></msubsup></mrow><mi>R</mi></mfrac></math>
</div>

La energía entregada a un resistor por transmisión eléctrica aparece en la forma de energía interna en el resistor.

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