// constractor class2
class Insurance {
  constructor(carname_select, caryear_select, insurance_level) {
    this.carname_select = carname_select;
    this.caryear_select = caryear_select;
    this.insurance_level = insurance_level;
  }
  //main prs
  // calculateprice method
  calculateprice(info) {
    let price;

    //opration for carname
    let base = 4000000;
    const carname_select_case = info.carname_select;
    switch (carname_select_case) {
      case "pride111":
        price = base * 1.15;
        break;
      case "pride132":
        price = base * 1.18;
        break;
      case "benz":
        price = base * 1.3;
        break;
      case "bmv":
        price = base * 1.8;
        break;
    }

    //opration for caryear
    const diffrence = this.getyeardiffrence(info.caryear_select);
    price = price - ((diffrence * 3) / 100) * price;

    //opration for insurance_level
    const level = info.insurance_level;
    price = this.calculatelevel(level, price);

    return price;
  }
  // getyeardiffrence for calculateprice operatoin
  getyeardiffrence(Elective_year) {
    const date = new Date();
    const yearofdate = { year: "numeric" };
    const persianDate = date.toLocaleDateString("fa-IR", yearofdate);
    let persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g,
      ],
      consvert_Numbers_to_english = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    const this_year = consvert_Numbers_to_english(persianDate);
    Elective_year = this_year - Elective_year;
    return Elective_year;
  }
  // calculatelevel for calculateprice operatoin
  calculatelevel(level, priceّ) {
    if (level == "ساده-شخص ثالث") {
      priceّ = priceّ * 1.3;
    } else {
      priceّ = priceّ * 1.7;
    }
    return priceّ;
  }
}
// constractor class1
class HTMLUI {
  constructor() {}
  //show year in selectinput method for html function
  display_year() {
    const date = new Date();
    const yearofdate = { year: "numeric" };
    const persianDate = date.toLocaleDateString("fa-IR", yearofdate);
    let persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g,
      ],
      consvert_Numbers_to_english = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    const this_year = consvert_Numbers_to_english(persianDate);
    for (let index = this_year; index >= this_year - 20; index--) {
      const element = index;
      const option = document.createElement("option");
      option.value = element;
      option.innerHTML = element;
      const caryear_select = document.getElementById("caryear_select");
      caryear_select.append(option);
    }
  }
  //show error in when input value=""
  err_meesage() {
    return alert("مدل خودرو و سال ساخت را درست  وارد کنید");
  }
  show_res(price, carname_select, caryear_select, insurance_level) {
    const output_Res = document.getElementById("resualt");
    const master = document.createElement("div");
    master.id = "master";
    const div1 = document.createElement("div");
    div1.innerHTML = `
      <p class="price">قیمت:${price}   تومان<p/>
      <p>مدل خودرو:${carname_select}<p/>
      <p>سال ساخت:${caryear_select}<p/>
      <p>نوع بیمه:${insurance_level}<p/>
      `;
    div1.id = "div1";
    const div2 = document.createElement("div");
    const copyinfobtn = document.createElement("a");
    copyinfobtn.text = "کپی قیمت";
    copyinfobtn.href = "#";
    copyinfobtn.id = "copyinfobtn";
    copyinfobtn.addEventListener("click", function () {
      let text = price + "تومان";
      navigator.clipboard.writeText(text).then(
        function () {
          alert("کپی شد");
        },
        function (err) {}
      );
    });
    div2.appendChild(copyinfobtn);
    master.appendChild(div1);
    master.appendChild(div2);
    output_Res.appendChild(master);
  }
}
