let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hue: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 10,
    unit: "px",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
};

const filtersContainer = document.querySelector(".filters");
const imageCanvas = document.querySelector("#image-canvas");
const resetbtn = document.querySelector("#reset-btn");
const imageInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const downloadbtn = document.querySelector("#success");
const presetContainer = document.querySelector(".presets");
let file = null;
let img = null;
function createElement(name, unit, value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.innerText = name;

  div.append(p);
  div.append(input);

  input.addEventListener("input", (e) => {
    filters[name].value = input.value;
    applyfilters();
  });

  return div;
}

function createFilters() {
  Object.keys(filters).forEach((key) => {
    const filterElement = createElement(
      key,
      filters[key].unit,
      filters[key].value,
      filters[key].min,
      filters[key].max,
    );

    filtersContainer.appendChild(filterElement);
  });
}
createFilters();
imageInput.addEventListener("change", (e) => {
  file = e.target.files[0];
  const imagePlaceholder = document.querySelector(".placeholder");
  imageCanvas.style.display = "block";
  imagePlaceholder.style.display = "none";

  img = new Image();
  img.src = URL.createObjectURL(file);
  img.onload = () => {
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});

function applyfilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter =
    `brightness(${filters.brightness.value}${filters.brightness.unit})
     contrast(${filters.contrast.value}${filters.contrast.unit})
     saturate(${filters.saturation.value}${filters.saturation.unit})
     hue-rotate(${filters.hue.value}${filters.hue.unit})
     blur(${filters.blur.value}${filters.blur.unit})
     grayscale(${filters.grayscale.value}${filters.grayscale.unit})
     sepia(${filters.sepia.value}${filters.sepia.unit})
     invert(${filters.invert.value}${filters.invert.unit})
     opacity(${filters.opacity.value}${filters.opacity.unit})
     `.trim();
  canvasCtx.drawImage(img, 0, 0);
}

resetbtn.addEventListener("click", () => {
  filters = {
    brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    saturation: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    hue: {
      value: 0,
      min: 0,
      max: 360,
      unit: "deg",
    },
    blur: {
      value: 0,
      min: 0,
      max: 10,
      unit: "px",
    },
    grayscale: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    sepia: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    invert: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%",
    },
  };
  applyfilters();
  filtersContainer.innerHTML = "";
  createFilters();
});

downloadbtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = imageCanvas.toDataURL();
  link.click();
});

const presets = {
  original: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    opacity: 100,
  },

  vivid: {
    brightness: 105,
    contrast: 115,
    saturation: 140,
    hue: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    opacity: 100,
  },

  vintage: {
    brightness: 105,
    contrast: 90,
    saturation: 80,
    hue: 0,
    blur: 0,
    grayscale: 10,
    sepia: 45,
    invert: 0,
    opacity: 100,
  },

  noir: {
    brightness: 105,
    contrast: 125,
    saturation: 0,
    hue: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    invert: 0,
    opacity: 100,
  },

  warm: {
    brightness: 105,
    contrast: 105,
    saturation: 120,
    hue: 10,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    invert: 0,
    opacity: 100,
  },

  cool: {
    brightness: 100,
    contrast: 105,
    saturation: 110,
    hue: 200,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    opacity: 100,
  },

  faded: {
    brightness: 110,
    contrast: 85,
    saturation: 75,
    hue: 0,
    blur: 0,
    grayscale: 15,
    sepia: 10,
    invert: 0,
    opacity: 100,
  },

  dramatic: {
    brightness: 95,
    contrast: 140,
    saturation: 115,
    hue: 0,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    invert: 0,
    opacity: 100,
  },

  soft: {
    brightness: 110,
    contrast: 90,
    saturation: 95,
    hue: 0,
    blur: 1,
    grayscale: 0,
    sepia: 5,
    invert: 0,
    opacity: 100,
  },

  monochrome: {
    brightness: 100,
    contrast: 110,
    saturation: 0,
    hue: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    invert: 0,
    opacity: 100,
  },
};

Object.keys(presets).forEach((presetName) => {
  const presetButton = document.createElement("button");
  presetButton.classList.add("preset-btn");
  presetButton.innerText = presetName;
  presetContainer.appendChild(presetButton);

  presetButton.addEventListener("click", () => {
    const preset = presets[presetName];

    Object.keys(preset).forEach((filterName) => {
      filters[filterName].value = preset[filterName];

      const input = document.querySelector(`#${filterName}`);
      input.value = preset[filterName];
    });

    applyfilters();
  });
});
