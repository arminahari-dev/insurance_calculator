const form = document.querySelector("form");
const html = new HTMLUI();
form.addEventListener("submit", function name(e) {
  // disable refresh page
  e.preventDefault();
  const carname_select = document.getElementById("carname").value;
  const caryear_select = document.getElementById("caryear_select").value;
  const insurance_level = document.querySelector(
    'input[name="level"]:checked'
  ).value;
  if (
    carname_select === "" ||
    caryear_select === "" ||
    insurance_level === ""
  ) {
    html.err_meesage();
  } else {
    swal({
      title: "با موفقیت محاسبه شد",
      icon: "success",
      button: {
        text: "حله",
      },
    });
    setTimeout(() => {
      const insurance = new Insurance(
        carname_select,
        caryear_select,
        insurance_level
      );
      //final price value recived from calculateprice proto
      const price = insurance.calculateprice(insurance);
      html.show_res(
        Math.round(price),
        insurance.carname_select,
        insurance.caryear_select,
        insurance.insurance_level,
        insurance.carname_select_text
      );
      form.reset();
    }, 1000);
  }
});
document.addEventListener("DOMContentLoaded", dom_loaded);
function dom_loaded() {
  html.display_year();
  const today = new Date().toLocaleDateString("fa-IR");
  document.getElementById("date").innerText = today;
}
