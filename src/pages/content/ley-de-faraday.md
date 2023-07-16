---
title: Campos Electricos
layout: ../../layouts/MarkDownLayout.astro
---

## **Ley de Faraday**

### **Conceptos y Principios:**
Ley de inducción de Faraday afirma que la fem inducida en una espiral es directamente proporcional a la relación de cambio en el tiempo del flujo magnético a través de la espira, o bien:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3b5;</mi><mo>=</mo><mo>-</mo><mfrac><mrow><mi mathvariant="normal">d</mi><msubsup><mi mathvariant="normal">&#x3a6;</mi><mi mathvariant="normal">B</mi><mo>&#xA0;</mo></msubsup></mrow><mi mathvariant="normal">dt</mi></mfrac></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi mathvariant="normal">&#x3a6;</mi><mi mathvariant="normal">B</mi><mo>&#xA0;</mo></msubsup><mo>=</mo><mo>&#x222e;</mo><mover accent='true'><mi mathvariant="normal">B</mi><mo>&#x2192;</mo></mover><mo>.</mo><mi mathvariant="normal">d</mi><mover accent='true'><mi mathvariant="normal">A</mi><mo>&#x2192;</mo></mover></math> es el flujo magnético a través de la espira.

Cuando una barra conductora de longitud <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="script">l</mi></math> se mueve con una velocidad <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi mathvariant="normal">v</mi><mo>&#x2192;</mo></mover></math> a través de un campo magnético <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi mathvariant="normal">B</mi><mo>&#x2192;</mo></mover></math>, donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi mathvariant="normal">B</mi><mo>&#x2192;</mo></mover></math> es perpendicular a la barra y
a <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi mathvariant="normal">v</mi><mo>&#x2192;</mo></mover></math>, la **fem de movimiento** inducida en la barra es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&#x3b5;</mi><mo>=</mo><mo>-</mo><mi mathvariant="normal">B</mi><mi mathvariant="script">lv</mi></math>
</div>

La **ley de Lenz** afirma que la corriente inducida y la fem inducida en un conductor están en una dirección tal que establecen un campo magnético que se opone al cambio que los produce.

Una forma general de la **ley de inducción de Faraday** es:

<div class="img-container">
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&#x222e;</mo><mover accent='true'><mi mathvariant="normal">E</mi><mo>&#x2192;</mo></mover><mo>.</mo><mi mathvariant="normal">d</mi><mover accent='true'><mi mathvariant="normal">s</mi><mo>&#x2192;</mo></mover><mo>=</mo><mo>-</mo><mfrac><mrow><mi mathvariant="normal">d</mi><msubsup><mi mathvariant="normal">&#x3a6;</mi><mi mathvariant="normal">B</mi><mo>&#xA0;</mo></msubsup></mrow><mi mathvariant="normal">dt</mi></mfrac></math>
</div>

Donde <math xmlns="http://www.w3.org/1998/Math/MathML"><mover accent='true'><mi mathvariant="normal">E</mi><mo>&#x2192;</mo></mover></math> es el campo eléctrico no conservativo que se produce mediante el flujo magnético cambiante.

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