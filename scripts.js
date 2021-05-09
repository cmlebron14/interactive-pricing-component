const slider = document.querySelector('.slider');
const sliderProgressBar = document.querySelector('.slider-bg');
const pageviews = document.querySelector('.pageviews-value');
const price = document.querySelector('.price-value');

const yearlyPricing = document.querySelector('#yearly');
const monthlyPricing = document.querySelector('#monthly');

const pageviewValues = ['10K', '50K', '100K', '500K', '1M'];
const priceValues = ['8', '12', '16', '24', '36'];
const discountedPriceValues = priceValues.map(price => price * 0.75);

const sliderGradients = [
  'linear-gradient(to right, #ecf0fb 0%, #ecf0fb 100%)',
  'linear-gradient(to right, #a4f3eb 0%, #a4f3eb 25%, #ecf0fb 25%, #ecf0fb 100%)',
  'linear-gradient(to right, #a4f3eb 0%, #a4f3eb 50%, #ecf0fb 50%, #ecf0fb 100%)',
  'linear-gradient(to right, #a4f3eb 0%, #a4f3eb 75%, #ecf0fb 75%, #ecf0fb 100%)',
  'linear-gradient(to right, #a4f3eb 0%, #a4f3eb 100%)'
];

slider.addEventListener('input', e => {
  pageviews.textContent = pageviewValues[slider.value];
  if (yearlyPricing.checked === true) {
    price.textContent = discountedPriceValues[slider.value];
  } else {
    price.textContent = priceValues[slider.value];
  }
  sliderProgressBar.style.background = sliderGradients[slider.value];
});

yearlyPricing.addEventListener('change', e => {
  if (yearlyPricing.checked === true) {
    price.textContent = discountedPriceValues[slider.value];
  }
})

monthlyPricing.addEventListener('change', e => {
  if (monthlyPricing.checked === true) {
    price.textContent = priceValues[slider.value];
  }
})
