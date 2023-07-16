---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Circuitos de Corriente Directa**

### **Definiciones:**
La **fem** de una batería es igual al voltaje a través de sus terminales cuando la corriente es cero. Esto es: la fem es equivalente al **voltaje de circuito abierto** de la batería.

### **Conceptos y Principios:**
La **resistencia equivalente** de un conjunto de resistores conectados en una **combinación en serie** es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>R</mi><mrow><mi>e</mi><mi>q</mi></mrow><mo>&#xA0;</mo></msubsup><mo>=</mo><msubsup><mi>R</mi><mn>1</mn><mo>&#xA0;</mo></msubsup><mo>+</mo><msubsup><mi>R</mi><mn>2</mn><mo>&#xA0;</mo></msubsup><mo>+</mo><msubsup><mi>R</mi><mn>3</mn><mo>&#xA0;</mo></msubsup><mo>+</mo><mo>.</mo><mo>.</mo><mo>.</mo></math>
</div>

La **resistencia equivalente** de un conjunto de resistores conectados en una combinación en **paralelo** se encuentra partiendo de la correspondencia:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mrow><msubsup><mi>R</mi><mrow><mi>e</mi><mi>q</mi></mrow><mo>&#xA0;</mo></msubsup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msubsup><mi>R</mi><mn>1</mn><mo>&#xa0;</mo></msubsup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><msubsup><mi>R</mi><mn>2</mn><mo>&#xa0;</mo></msubsup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><msubsup><mi>R</mi><mn>3</mn><mo>&#xa0;</mo></msubsup></mrow></mfrac><mo>+</mo><mo>.</mo><mo>.</mo><mo>.</mo></math>
</div>

Los circuitos que involucran más de una espira se analizan convenientemente con el uso de las **reglas de Kirchhoff**:

- **Regla de la unión**. En cualquier unión, la suma de las corrientes debe ser igual a cero:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><munderover accent='false' accentunder='false'><mo>&#x2211;</mo><mrow><mi>n</mi><mi>o</mi><mi>d</mi><mi>o</mi></mrow><mo>&#xA0;</mo></munderover><mi>I</mi><mo>=</mo><mn>0</mn></math>
</div>

- **Regla de la espira**. La suma de las diferencias de potencial a través de todos los elementos alrededor de cualquier espira de circuito debe ser cero:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><munderover accent='false' accentunder='false'><mo>&#x2211;</mo><mrow><mi>m</mi><mi>a</mi><mi>l</mi><mi>l</mi><mi>a</mi><mo>&#xA0;</mo><mi>c</mi><mi>e</mi><mi>r</mi><mi>r</mi><mi>a</mi><mi>d</mi><mi>a</mi></mrow><mo>&#xA0;</mo></munderover><mi>&#x394;</mi><mi>V</mi><mo>=</mo><mn>0</mn></math>
</div>

Cuando un resistor se recorre en la dirección de la corriente, la diferencia de potencial <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><mi>V</mi></math> a través del resistor es –IR. Cuando un resistor se recorre en la dirección opuesta a la corriente, <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&#x394;</mi><mi>V</mi></math> = +IR. Cuando una fuente de fem se recorre en la dirección de la fem (terminal negativa a terminal positiva), la diferencia de potencial es <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>+</mo><mi>&#x3b5;</mi></math>. Cuando una fuente de fem se recorre opuesta a la fem (positivo a negativo), la diferencia de potencial es <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>-</mo><mi>&#x3b5;</mi></math>.

Si un capacitor se carga con una batería a través de un resistor de resistencia R, la carga en el capacitor y la corriente en el circuito varían en el tiempo de acuerdo con las expresiones:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>q</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>Q</mi><mo>(</mo><mn>1</mn><mo>-</mo><msubsup><mi>e</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi>t</mi><mo>/</mo><mi>R</mi><mi>C</mi></mrow></msubsup><mo>)</mo></math>
</div>

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">I</mi><mo>(</mo><mi mathvariant="normal">t</mi><mo>)</mo><mo>=</mo><mfrac><mi mathvariant="normal">&#x3b5;</mi><mi mathvariant="normal">R</mi></mfrac><msubsup><mi mathvariant="normal">e</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi mathvariant="normal">t</mi><mo>/</mo><mi mathvariant="normal">RC</mi></mrow></msubsup></math>
</div>

Doonde Q = C<math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3b5;</mi></math> es la máxima carga en el capacitor. El producto RC se llama **constante de tiempo** <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3c4;</mi></math> del circuito.

Si un capacitor cargado se descarga a través de un resistor de resistencia R, la carga y la corriente disminuyen exponencialmente en el tiempo de acuerdo con las expresiones:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">q</mi><mo>(</mo><mi mathvariant="normal">t</mi><mo>)</mo><mo>=</mo><msubsup><mi mathvariant="normal">Qe</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi mathvariant="normal">t</mi><mo>/</mo><mi mathvariant="normal">RC</mi></mrow></msubsup></math>
</div>

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">I</mi><mo>(</mo><mi mathvariant="normal">t</mi><mo>)</mo><mo>=</mo><mo>-</mo><msubsup><mi mathvariant="normal">I</mi><mi mathvariant="normal">i</mi><mo>&#xA0;</mo></msubsup><msubsup><mi mathvariant="normal">e</mi><mo>&#xA0;</mo><mrow><mo>-</mo><mi mathvariant="normal">t</mi><mo>/</mo><mi mathvariant="normal">RC</mi></mrow></msubsup></math>
</div>

Donde Q es la carga inicial en el capacitor e <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">I</mi><mi mathvariant="normal">i</mi><mo>&#xA0;</mo></msubsup></math>=Q/RC es la corriente inicial en el circuito.

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