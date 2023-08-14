export default function hideImage() {
  const images = document.querySelectorAll(".gallery-wrapper .item");

  images.forEach((element) => {
    element.addEventListener("click", () => {
      images.forEach((element) => {
        if (element.classList.contains("-active")) {
          element.classList.remove("-active");
        }
      });

      element.classList.add("-active");
    });
  });
}
