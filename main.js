const panels = document.querySelectorAll(".panel");

//duyet tung phan tu
panels.forEach((item) =>
  //xuat gia tri item de xem
  {
    console.log(item);
    item.addEventListener("click", () => {
      //xoa class active cua cac panel khac
      removeActive();
      //them class active cho panel
      item.classList.add("active");
    });
  }
);
function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
