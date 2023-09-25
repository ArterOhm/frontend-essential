const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses")
    console.log(response)

    const rawData = await response.json()

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`)
    }

    const newdata = rawData.courses
    console.log(newdata)

    newdata.map((e) => {
      const i1 = document.getElementById("course")
      const newList = document.createElement("div")
      newList.textContent = ""
      newList.classList.add("course-list")
      // const section = document.createElement('section')
      // section.classList.add('course')
      newList.innerHTML = `<h3>${e.courseNo} ${e.abbrName}</h3>
                         <h4>จำนวนหน่วยกิต</h4>
                         <p>${e.credit} หน่วยกิต</p>
                         <h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
                         <p>${e.department}</p>
                         <h4>ประเภท GenEd</h4>
                         <p>${
                           e.genEdType === "NO" ? "ไม่ใช่ GenEd" : e.genEdType
                         }</p>
                        `
      i1.appendChild(newList)
      // i1.appendChild(newList)
      // const h3courseNo = document.createElement("h3")
      // const pEn = document.createElement("p")
      // const pTh = document.createElement("p")
      // const credit = document.createElement("p")
      // const department = document.createElement("p")
      // const creditHours = document.createElement("p")
      // const totalSeats = document.createElement("p")

      // h3courseNo.textContent = e.courseNo + " " + e.abbrName
      // credit.textContent = "credit : " + Number(e.credit)
      // pEn.textContent = "courseNameEn : " + e.courseNameEn
      // pTh.textContent = "courseNameTh : " + e.courseNameTh
      // department.textContent = "department : " + e.department
      // creditHours.textContent = "creditHours : " + e.creditHours
      // totalSeats.textContent = "totalSeats : " + Number(e.totalSeats)
      // return (
      //   newList.appendChild(h3courseNo),
      //   newList.appendChild(pTh),
      //   newList.appendChild(pEn),
      //   newList.appendChild(credit),
      //   newList.appendChild(department),
      //   newList.appendChild(creditHours),
      //   newList.appendChild(totalSeats)
      // )
    })
  } catch (err) {
    console.log(err)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  main()
})
