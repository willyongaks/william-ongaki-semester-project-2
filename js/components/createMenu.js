import { getUserName } from "../localStorage/loginStorage.js";

export function createMenu() {
    const { pathname } = document.location;
    console.log(pathname)

    const container = document.querySelector(".navbar");

    const username = getUserName();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = ``
    }


    container.innerHTML += `<div class="container-fluid">
                            <a class="navbar-brand ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/">Shuzy</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/products.html">Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login.html"><span>Hi ${username}</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="cart.html"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                            `


}

