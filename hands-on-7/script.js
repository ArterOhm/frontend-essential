const login = async (username, password) => {
  // * fill here...
  const usernamepassword = {username, password}

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usernamepassword),
    })
    // console.log(res)
    const data = await res.json()
    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`)
    }
    // console.log(data)
    return data.accessToken
  } catch (err) {
    alert(err)
  }
}

const getMyinfomation = async () => {
  const token = localStorage.getItem("token")
  try {
    // * fill here...
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      //   body: JSON.stringify(token),
    })
    const data = await res.json()
    // if (!res.ok) {
    //   throw new Error(`${res.status} - ${data.message}`)
    // }

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

const main = () => {
  const usernameInput = document.getElementById("username")

  const passwordInput = document.getElementById("password")

  const submitButton = document.getElementById("submit")

  const getinfoButton = document.getElementById("get-info")

  getinfoButton.addEventListener("click", async (e) => {
    e.preventDefault()
    await getMyinfomation()
  })

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault()

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something")
      return
    }

    // * fill here...?
    const accessToken = await login(usernameInput.value, passwordInput.value) // function login
    if (!accessToken) return

    localStorage.setItem("token", accessToken)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  main()
})
