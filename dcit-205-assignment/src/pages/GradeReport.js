import Footer from "../components/Footer";
import Student from "../scripts/student-data";
import webiste from "../scripts/data";
import { Link } from "react-router-dom";
export default function GradeReport() {
  return (
    <>
      <section className="flex bg-gray-100 min-h-screen">
        <aside className="hidden sm:flex sm:flex-col">
          <Link 
            to="/home"
            className="inline-flex items-center justify-center h-20 w-20 bg-white hover:bg-slate-100 focus:bg-purple-500"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt"
              height="300.000000pt"
              viewBox="0 0 300.000000 300.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>{webiste.websiteName}</title>{" "}
              <g
                transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                fill="#3b6fe8"
                stroke="none"
              >
                {" "}
                <path d="M1432 2719 c-32 -12 -54 -52 -46 -84 6 -24 43 -59 139 -129 15 -11 17 -17 8 -27 -9 -9 -26 -1 -74 35 -34 26 -67 45 -73 43 -6 -2 -11 -19 -11 -38 0 -31 6 -38 73 -82 39 -26 72 -52 72 -57 0 -16 -33 -11 -60 10 -27 21 -46 25 -54 11 -3 -5 45 -42 107 -84 61 -41 186 -125 276 -186 90 -61 165 -110 166 -109 1 2 -1 42 -5 89 -13 149 -27 170 -353 506 -98 100 -125 117 -165 102z m196 -188 c78 -81 161 -171 184 -200 23 -28 45 -51 49 -51 12 0 49 -107 49 -140 0 -48 1 -48 -196 85 -177 119 -185 125 -174 144 6 13 4 25 -6 40 -14 20 -13 24 10 52 32 38 26 52 -49 111 -72 56 -87 108 -31 108 16 0 64 -43 164 -149z" />{" "}
                <path d="M1624 2419 c-14 -15 -16 -24 -8 -37 15 -23 48 -27 64 -8 10 13 9 20 -4 41 -20 30 -27 31 -52 4z m43 -15 c9 -23 -13 -40 -32 -24 -12 10 -13 16 -4 26 15 18 28 18 36 -2z" />{" "}
                <path d="M1746 2324 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13 -45 -6z m44 -35 c0 -25 -33 -22 -38 4 -2 12 3 17 17 17 15 0 21 -6 21 -21z" />{" "}
                <path d="M898 2631 c-15 -12 -29 -35 -33 -51 -12 -54 18 -85 164 -174 122 -73 157 -105 108 -99 -10 2 -66 32 -125 68 -67 41 -114 64 -124 60 -9 -4 -22 -19 -28 -35 -10 -25 -9 -35 6 -62 16 -27 49 -48 194 -120 96 -47 176 -91 178 -96 8 -26 -25 -17 -144 38 -71 33 -137 60 -146 60 -19 0 -38 -28 -38 -55 0 -33 56 -72 165 -114 117 -45 131 -53 121 -69 -4 -7 -32 -2 -78 14 -88 30 -88 30 -88 -1 0 -30 23 -46 113 -75 62 -20 89 -41 74 -56 -3 -3 -21 -1 -39 4 -18 6 -91 22 -163 37 -143 29 -234 50 -398 90 -60 15 -110 25 -112 23 -2 -2 16 -42 39 -88 68 -131 151 -214 259 -254 213 -80 376 -63 927 98 150 44 180 55 158 61 -16 4 -26 11 -23 15 9 15 -76 40 -136 40 l-61 0 18 28 c10 15 30 41 46 57 30 32 35 54 16 73 -9 9 -8 12 4 12 9 0 23 -6 30 -13 18 -18 173 -118 235 -151 28 -16 57 -26 64 -24 8 3 34 31 59 64 51 66 120 109 188 120 53 8 62 1 34 -29 -31 -33 -27 -61 10 -91 33 -25 33 -25 15 -55 -19 -32 -23 -86 -7 -96 6 -3 10 -12 10 -20 0 -9 -24 -4 -85 21 -96 40 -192 50 -297 32 -34 -6 -74 -11 -88 -12 -14 -2 -59 -14 -100 -29 -135 -47 -363 -112 -490 -141 -196 -45 -357 -48 -485 -9 -65 20 94 -95 177 -128 29 -12 87 -27 128 -34 119 -21 201 -3 369 83 151 77 224 98 314 88 66 -7 101 -22 139 -63 51 -54 63 -135 29 -209 -28 -61 -44 -67 -36 -12 25 166 -190 275 -335 170 -39 -27 -90 -98 -90 -123 0 -11 -18 -14 -77 -14 -44 0 -79 -4 -80 -10 -2 -6 27 -10 72 -10 70 0 75 -1 75 -22 0 -12 3 -28 6 -37 5 -13 -2 -15 -42 -12 -60 5 -104 -12 -144 -56 l-30 -32 -16 22 c-48 69 -168 66 -223 -4 -16 -21 -27 -24 -83 -24 -115 0 -172 42 -288 210 -36 53 -93 93 -145 104 -42 9 -117 -16 -166 -55 l-42 -33 6 135 c3 73 9 158 13 187 6 44 4 52 -9 52 -25 0 -32 -58 -32 -275 1 -183 3 -209 27 -301 56 -217 157 -395 313 -549 168 -168 341 -261 605 -326 35 -9 112 -14 215 -13 139 0 173 3 262 26 334 86 606 296 768 591 93 170 147 418 129 592 -7 69 -12 90 -24 90 -8 0 -15 -7 -14 -15 0 -8 4 -48 8 -87 8 -82 -4 -96 -22 -27 -23 84 -63 154 -133 229 -38 41 -69 81 -69 89 0 8 12 28 26 45 23 28 31 31 85 31 l59 0 -37 58 c-72 111 -107 138 -189 145 -102 10 -207 -57 -242 -155 -18 -53 -23 -55 -55 -33 -12 8 -130 87 -262 174 -132 88 -289 194 -350 236 -60 42 -146 101 -190 131 -44 30 -121 84 -172 119 -107 76 -137 86 -175 56z m123 -64 c25 -18 78 -54 117 -82 39 -27 74 -56 77 -63 7 -19 -27 -63 -44 -56 -37 13 -244 150 -258 170 -11 17 -12 27 -3 43 16 30 57 26 111 -12z m-6 -235 c11 -7 44 -24 73 -38 l54 -26 28 20 c21 16 37 20 63 15 35 -5 68 14 79 48 3 9 40 -12 114 -63 246 -172 226 -146 165 -208 -28 -29 -51 -56 -51 -62 0 -5 20 -30 45 -55 51 -50 53 -67 9 -69 -16 -1 -40 -3 -54 -4 -14 -1 -36 -2 -50 -1 -24 1 -23 2 13 39 20 21 37 41 37 45 0 4 -25 33 -56 64 l-55 57 -30 -31 c-16 -18 -29 -37 -29 -43 0 -6 -3 -9 -7 -7 -5 2 -16 -4 -25 -15 -17 -17 -17 -18 7 -18 31 0 75 41 75 69 0 11 5 23 10 26 6 3 10 -3 10 -14 0 -27 47 -81 71 -81 10 0 19 -4 19 -10 0 -5 -9 -10 -20 -10 -27 0 -70 -43 -70 -70 0 -12 -4 -18 -10 -15 -5 3 -10 13 -10 22 0 26 -41 63 -69 63 l-25 0 33 -34 c31 -32 35 -59 8 -54 -22 4 -57 -13 -68 -34 -8 -15 -7 -24 8 -40 10 -11 27 -24 38 -28 29 -11 -92 -23 -256 -24 -122 -1 -133 -2 -105 -14 25 -11 28 -15 16 -23 -23 -16 196 -4 323 17 59 10 107 22 107 26 0 4 -8 8 -17 8 -12 0 -14 3 -7 10 9 9 214 30 214 22 0 -9 -99 -45 -144 -52 -28 -5 -94 -19 -146 -32 -131 -31 -395 -33 -482 -4 -77 27 -208 121 -229 166 -18 37 -14 63 5 39 12 -16 113 -82 130 -86 39 -8 59 -13 102 -28 93 -31 389 -44 343 -14 -8 5 -27 9 -44 8 -48 0 -276 28 -325 40 -79 21 -134 44 -170 70 -19 14 -39 27 -45 27 -5 1 -16 2 -22 3 -7 0 -13 8 -13 17 0 11 5 14 16 10 9 -3 22 -6 29 -6 8 0 30 -14 49 -30 41 -36 121 -65 235 -85 96 -17 185 -20 160 -5 -8 5 -47 14 -85 20 -133 20 -285 63 -271 76 3 3 63 -8 133 -25 135 -32 267 -60 320 -68 36 -6 84 20 84 45 0 9 -12 29 -27 44 -21 22 -24 31 -15 40 32 32 -7 94 -64 104 -39 7 -177 76 -182 92 -2 6 3 12 11 12 13 0 136 -53 189 -81 32 -17 76 -11 89 12 18 34 -3 62 -67 94 -229 112 -272 137 -281 161 -3 9 0 20 7 24 12 7 26 1 105 -48z m259 36 c8 -14 7 -21 -6 -34 -30 -30 -75 9 -48 42 16 18 39 15 54 -8z m433 -328 c39 -18 41 -26 7 -34 -17 -5 -31 -20 -44 -49 -16 -35 -20 -38 -25 -22 -12 39 -22 50 -53 65 -17 8 -32 17 -32 20 0 3 15 12 33 20 19 9 38 29 46 48 l15 33 10 -33 c7 -22 22 -38 43 -48z m619 41 c-4 -5 -25 -12 -47 -16 -32 -6 -55 -20 -95 -59 -64 -62 -71 -57 -11 9 32 36 54 50 92 60 62 17 68 17 61 6z m88 -67 c20 -8 21 -38 1 -54 -29 -24 -60 21 -33 48 14 14 12 14 32 6z m-564 -164 c0 -5 -19 -10 -42 -10 -42 0 -257 -14 -409 -26 -47 -4 -79 -2 -83 4 -8 13 22 20 134 28 52 3 97 8 99 10 10 9 301 3 301 -6z m380 -72 c151 -36 285 -160 331 -309 20 -65 26 -144 9 -134 -5 3 -10 17 -10 29 0 13 -16 55 -35 94 -90 178 -306 295 -517 278 -135 -11 -128 -22 13 -22 121 0 140 -2 200 -26 37 -14 84 -37 105 -51 89 -56 211 -219 186 -250 -5 -6 -8 -37 -5 -67 5 -74 -10 -137 -58 -239 -43 -89 -85 -146 -201 -267 -74 -78 -91 -114 -30 -66 183 147 305 367 306 550 0 84 9 106 20 51 16 -82 -7 -186 -71 -314 -49 -99 -154 -231 -226 -285 -72 -55 -62 -70 14 -21 36 23 100 87 196 201 2 2 1 -4 -3 -15 -4 -11 -18 -33 -31 -48 -13 -16 -23 -32 -23 -37 0 -5 -21 -30 -46 -57 -26 -26 -55 -59 -65 -72 -11 -13 -19 -20 -19 -15 0 5 -7 -1 -15 -12 -36 -52 -259 -199 -314 -207 -12 -2 -27 -9 -33 -15 -13 -13 -38 -16 -38 -5 0 16 35 43 57 43 12 0 23 5 23 11 0 6 6 9 14 6 8 -3 17 0 19 7 3 7 19 16 36 19 67 14 95 83 51 127 -26 26 -65 25 -115 -4 -35 -20 -40 -27 -40 -60 0 -42 -30 -71 -41 -41 -4 9 -19 22 -35 31 -23 12 -32 12 -49 2 -11 -7 -20 -17 -20 -22 0 -4 -9 -6 -21 -3 -22 6 -140 -21 -174 -40 -16 -9 -25 -8 -40 3 -10 8 -28 14 -38 14 -20 0 -56 -34 -58 -54 -3 -33 5 -64 23 -90 l21 -29 -70 5 c-89 6 -101 13 -75 42 11 11 22 38 23 58 4 47 -22 78 -66 78 -17 0 -40 7 -51 15 -10 8 -33 15 -50 15 -17 0 -37 7 -44 15 -7 8 -31 20 -54 27 -22 7 -60 26 -82 42 -23 17 -55 40 -70 51 -33 24 -54 44 -74 73 -39 58 -115 38 -142 -39 -10 -27 21 -77 53 -84 16 -4 29 -12 29 -18 0 -6 10 -21 22 -34 12 -13 17 -23 11 -23 -27 0 -163 121 -223 200 -19 25 -37 47 -40 50 -19 17 -78 124 -73 135 7 20 97 28 256 23 133 -5 150 -8 267 -46 76 -26 157 -61 208 -91 84 -51 202 -140 202 -154 0 -4 -10 -11 -22 -16 -13 -5 -31 -18 -42 -30 -66 -73 161 -90 406 -31 91 22 198 63 251 97 20 13 37 20 37 16 0 -3 10 3 23 14 12 11 36 28 53 36 51 26 163 146 174 186 5 21 19 40 31 46 33 15 78 104 95 188 14 67 14 84 0 163 -12 71 -22 98 -53 143 -74 108 -209 171 -362 171 -82 0 -90 -20 -9 -22 59 -1 76 -3 88 -8 3 -1 19 -3 35 -5 40 -4 85 -22 85 -35 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -13 -7 -13 -33 2 -24 13 -97 11 -111 -2 -5 -5 -18 -5 -30 1 -12 6 -5 -5 17 -26 55 -54 79 -107 79 -175 0 -72 -21 -117 -77 -169 -51 -47 -172 -110 -269 -140 -85 -26 -253 -57 -364 -66 -54 -5 -81 -12 -79 -19 2 -6 14 -13 26 -14 13 -2 41 -22 62 -44 l39 -41 127 6 c135 7 184 15 180 32 -1 6 -9 8 -17 7 -8 -2 -76 -6 -150 -9 l-135 -5 -27 29 -28 29 103 13 c311 39 543 146 613 283 43 85 28 206 -32 266 -19 19 -33 36 -32 38 8 7 155 -38 178 -55 113 -82 150 -254 85 -400 -38 -84 -77 -110 -239 -161 -72 -23 -183 -60 -247 -81 -107 -36 -123 -39 -228 -39 -100 0 -112 -2 -101 -15 8 -10 31 -15 68 -15 63 0 60 -7 -17 -38 l-54 -22 -68 67 c-86 84 -172 145 -272 193 l-79 37 109 7 c322 21 602 97 704 193 60 56 83 106 83 178 0 37 -6 72 -16 90 -25 45 -90 112 -117 120 -13 4 -19 10 -13 14 6 3 -37 6 -96 5 -95 -1 -115 -4 -182 -32 -41 -17 -109 -49 -152 -72 -89 -47 -151 -71 -164 -62 -5 4 -9 25 -9 46 0 39 1 40 49 52 28 7 53 11 57 8 4 -2 10 0 13 5 4 5 39 17 79 26 89 20 268 75 283 87 7 5 27 8 45 7 19 -1 53 7 78 20 75 39 204 46 321 19z m-1004 -225 c3 -10 9 -26 14 -35 6 -11 5 -18 -3 -21 -23 -8 -113 5 -164 25 -87 32 -77 37 110 46 28 2 39 -2 43 -15z m61 1 c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0 13 -7 17 -16z m463 -54 c-6 -10 -7 -25 -4 -34 15 -38 74 -23 74 19 0 33 12 31 55 -6 36 -32 46 -53 20 -43 -8 4 -12 11 -9 18 3 6 -8 -4 -26 -22 -30 -32 -31 -35 -14 -53 19 -22 44 -25 62 -7 9 9 13 7 17 -8 4 -10 11 -27 16 -36 14 -28 11 -41 -18 -66 -30 -26 -58 -39 -98 -46 -19 -4 -27 2 -40 26 -8 17 -15 38 -15 47 0 48 -66 81 -98 49 -14 -14 -16 -58 -4 -58 5 0 25 -16 45 -37 41 -40 38 -57 -13 -68 -23 -5 -38 1 -75 29 -26 20 -53 36 -60 36 -23 0 -27 19 -11 42 9 12 16 35 16 50 0 32 7 34 38 12 21 -14 25 -14 47 0 36 23 41 53 13 76 -13 11 -29 19 -35 20 -23 0 -14 28 15 48 58 41 121 48 102 12z m49 -14 c8 -10 8 -16 -3 -25 -10 -9 -16 -8 -26 3 -12 15 -6 36 9 36 5 0 14 -6 20 -14z m-1178 -28 c43 -24 137 -154 122 -169 -6 -6 -24 -3 -46 6 -53 22 -164 20 -212 -5 -42 -21 -60 -19 -29 5 51 39 173 46 242 15 l42 -19 -27 35 c-35 43 -115 84 -164 84 -42 0 -95 -17 -85 -27 3 -3 1 -12 -5 -20 -9 -10 -3 -10 24 2 45 19 112 19 152 0 30 -13 29 -13 -17 -8 -81 10 -132 -4 -180 -47 -24 -22 -35 -37 -25 -34 19 7 22 -3 8 -25 -14 -21 -37 33 -44 101 l-5 57 56 36 c69 43 132 47 193 13z m1276 -49 c9 -9 8 -16 -3 -27 -14 -13 -17 -13 -32 2 -15 15 -15 18 -2 26 19 12 24 12 37 -1z m-239 -12 c8 -10 6 -16 -10 -26 -17 -11 -23 -10 -37 3 -14 15 -14 18 -1 26 21 13 36 12 48 -3z m92 -92 c0 -2 -9 -9 -21 -15 -15 -9 -24 -8 -36 1 -13 12 -13 14 2 26 13 8 23 9 36 2 11 -5 19 -12 19 -14z m-1000 -65 c135 -59 172 -69 245 -69 61 -1 75 3 114 29 61 42 127 42 173 1 32 -29 32 -30 14 -50 -10 -11 -38 -28 -62 -37 -71 -27 -173 -15 -337 40 -174 59 -270 74 -369 59 -40 -7 -83 -15 -95 -19 -41 -12 -26 24 20 47 65 34 87 39 157 35 46 -2 87 -13 140 -36z m830 -40 c21 -11 41 -24 45 -30 9 -14 3 -13 -46 10 -70 31 -146 23 -211 -22 -35 -24 -45 -23 -22 3 50 56 164 75 234 39z m-860 -21 c104 -24 151 -41 146 -54 -3 -9 14 -16 57 -24 229 -44 393 -124 554 -269 40 -37 73 -69 73 -73 0 -3 -18 -14 -40 -24 l-41 -18 -37 35 c-136 129 -331 225 -539 264 -95 18 -306 15 -371 -5 -30 -9 -33 -8 -47 19 -8 16 -15 31 -15 34 0 7 60 18 138 25 40 3 73 11 75 16 5 22 -119 15 -208 -10 -17 -5 -22 0 -31 34 l-11 41 36 6 c20 3 41 7 46 9 23 8 173 4 215 -6z m827 -24 c2 -6 -16 -9 -45 -7 -34 3 -53 -1 -64 -12 -17 -17 -68 -29 -68 -16 0 7 25 22 42 24 4 1 13 7 20 14 15 15 110 13 115 -3z m-190 -42 c-2 -2 -24 -5 -48 -8 l-44 -4 24 18 c20 15 29 17 48 8 13 -5 21 -12 20 -14z m892 -189 c-108 -111 -271 -205 -444 -257 -85 -25 -122 -30 -245 -34 -80 -3 -154 -3 -165 -1 -14 3 29 29 135 81 153 75 340 148 515 202 50 15 128 40 175 55 47 15 87 26 89 23 3 -2 -24 -33 -60 -69z m-1405 -150 c18 -18 20 -30 6 -39 -6 -3 -13 1 -16 9 -9 23 -44 20 -44 -3 0 -10 7 -21 15 -25 21 -8 19 -26 -3 -26 -26 0 -42 20 -42 52 0 43 53 64 84 32z m80 -80 c30 -29 10 -74 -32 -74 -49 0 -71 48 -34 76 23 18 47 17 66 -2z m60 -76 c-22 -42 -2 -61 22 -22 10 16 19 31 20 33 2 1 7 0 13 -4 16 -9 -14 -62 -39 -70 -21 -7 -60 10 -60 25 0 24 34 78 46 73 11 -4 11 -11 -2 -35z m1078 7 c8 -19 8 -28 -2 -40 -25 -30 -80 -12 -80 25 0 44 63 55 82 15z m-116 -11 c-3 -8 -2 -12 4 -9 11 7 45 -54 35 -63 -7 -8 -28 18 -51 61 -13 24 -13 27 2 27 10 0 14 -5 10 -16z m-806 -65 c0 -11 -7 -22 -15 -25 -10 -4 -13 -13 -10 -25 10 -30 -14 -22 -26 9 -7 15 -13 22 -16 15 -5 -15 -23 -18 -23 -4 0 5 7 25 15 45 15 36 15 36 45 21 18 -9 30 -23 30 -36z m-214 0 c15 -16 22 -29 16 -29 -7 0 -12 5 -12 11 0 5 -4 8 -9 5 -10 -6 -61 31 -61 44 0 16 38 -2 66 -31z m914 2 c0 -5 -8 -12 -17 -14 -11 -3 -7 -5 10 -6 32 -1 45 -24 27 -46 -14 -17 -60 -21 -60 -5 0 6 9 10 20 10 11 0 20 5 20 10 0 6 -11 10 -24 10 -25 0 -37 15 -28 38 5 14 52 17 52 3z m-605 -11 c11 -17 -5 -32 -21 -19 -8 7 -14 7 -14 1 0 -5 7 -12 15 -16 19 -7 20 -45 1 -52 -17 -7 -56 12 -56 27 0 6 9 8 21 4 21 -7 21 -6 6 16 -12 17 -14 26 -5 36 12 15 44 17 53 3z m515 -15 c0 -8 -8 -16 -17 -16 -17 -1 -17 -2 0 -6 21 -6 23 -23 1 -23 -8 0 -13 -4 -10 -9 3 -5 15 -7 26 -4 24 6 27 -12 4 -21 -35 -13 -51 -6 -58 25 -9 48 -8 57 12 62 33 9 42 7 42 -8z m-710 -35 c19 -17 40 -30 47 -30 7 0 13 -5 13 -11 0 -7 -8 -6 -22 3 -13 8 -34 18 -48 21 -14 4 -36 16 -50 27 l-25 20 25 -1 c14 0 41 -13 60 -29z m298 13 c2 -8 -6 -13 -20 -14 -17 -1 -18 -3 -5 -6 9 -2 17 -9 17 -15 0 -5 -7 -8 -15 -4 -8 3 -15 1 -15 -4 0 -6 7 -10 16 -10 9 0 14 -6 11 -12 -2 -7 -13 -12 -23 -10 -41 6 -42 9 -31 52 10 35 15 40 36 38 13 -2 26 -9 29 -15z m335 -13 c11 -51 -4 -67 -53 -60 -20 3 -21 3 -30 44 -6 28 -5 36 6 36 8 0 17 -13 21 -30 9 -45 37 -40 30 5 -7 44 18 49 26 5z m-145 1 c3 -10 0 -12 -12 -8 -9 4 -16 3 -16 -2 0 -5 9 -11 20 -14 11 -3 20 -12 20 -21 0 -23 -36 -39 -60 -26 -26 14 -17 30 13 24 l22 -5 -22 12 c-22 12 -30 38 -16 53 11 11 46 2 51 -13z m66 -86 c8 -8 21 -15 28 -16 29 -1 -30 -18 -66 -18 l-39 -1 23 25 c27 29 33 30 54 10z" />{" "}
                <path d="M1400 2210 c-21 -39 34 -85 63 -51 25 29 28 50 7 61 -29 16 -58 12 -70 -10z m60 -19 c0 -24 -25 -34 -40 -16 -15 18 -5 35 21 35 12 0 19 -7 19 -19z" />{" "}
                <path d="M2080 1504 c0 -3 7 -12 15 -20 25 -25 19 -76 -20 -168 -17 -39 17 -4 36 38 24 54 25 118 1 139 -19 17 -32 22 -32 11z" />{" "}
                <path d="M2070 1430 c0 -28 -5 -60 -11 -72 -6 -11 -8 -22 -5 -25 8 -8 28 46 33 93 3 25 1 44 -6 48 -7 5 -11 -9 -11 -44z" />{" "}
                <path d="M2310 1405 c-1 -5 -1 -33 0 -61 1 -28 -6 -68 -14 -89 -12 -27 -12 -34 -3 -27 21 18 37 102 28 147 -5 22 -10 36 -11 30z" />{" "}
                <path d="M2371 1304 c-2 -32 -56 -108 -124 -170 -40 -38 -94 -73 -161 -105 -110 -54 -104 -68 8 -17 89 40 139 74 194 129 48 49 96 138 89 166 -4 15 -5 15 -6 -3z" />{" "}
                <path d="M1830 1164 c-88 -39 -241 -77 -363 -89 -81 -9 -81 -19 1 -16 113 4 352 66 401 103 29 22 9 23 -39 2z" />{" "}
                <path d="M674 942 c3 -6 -2 -13 -11 -15 -10 -3 5 -5 33 -6 123 -3 311 -58 366 -108 10 -9 18 -13 18 -9 0 35 -71 83 -173 116 -68 23 -244 39 -233 22z" />{" "}
                <path d="M781 886 c2 -2 33 -12 69 -21 36 -9 79 -22 95 -29 17 -7 34 -13 39 -14 5 0 12 -5 15 -10 3 -5 17 -13 31 -17 38 -11 14 9 -45 38 -65 33 -226 74 -204 53z" />{" "}
                <path d="M1201 778 c30 -23 73 -61 96 -85 41 -42 53 -50 53 -35 -1 25 -158 162 -188 162 -8 0 10 -19 39 -42z" />{" "}
                <path d="M1136 786 c3 -9 13 -18 22 -21 10 -3 38 -24 64 -48 25 -23 52 -43 60 -45 19 -4 -94 98 -131 117 -17 9 -20 9 -15 -3z" />{" "}
                <path d="M480 1439 c-44 -12 -104 -58 -77 -59 10 0 31 10 48 23 24 17 44 22 94 22 35 0 61 3 57 6 -13 13 -87 17 -122 8z" />{" "}
                <path d="M1145 1203 l-30 -5 30 -14 c17 -7 40 -21 51 -29 20 -15 24 -14 50 9 l29 24 -28 11 c-28 11 -47 12 -102 4z m90 -23 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z" />{" "}
                <path d="M665 1064 c120 -7 251 -25 330 -45 44 -12 92 -22 106 -24 34 -5 132 -50 197 -91 29 -19 55 -34 58 -34 6 0 79 -55 117 -89 15 -14 27 -20 27 -15 0 12 -102 105 -153 139 -37 26 -168 93 -229 118 -33 14 -36 14 -31 0 5 -13 2 -15 -13 -9 -79 30 -190 48 -324 50 -80 2 -118 2 -85 0z" />{" "}
                <path d="M881 681 c-15 -10 -8 -41 9 -41 15 0 25 29 14 40 -5 5 -15 5 -23 1z" />{" "}
                <path d="M2006 615 c-3 -9 1 -18 10 -22 19 -7 28 2 21 22 -8 19 -23 19 -31 0z" />{" "}
                <path d="M1838 2558 c-15 -16 -22 -28 -17 -28 5 0 18 -15 29 -32 12 -21 20 -27 20 -16 0 9 11 26 25 36 24 19 24 21 7 26 -11 4 -23 14 -28 24 -8 15 -12 14 -36 -10z" />{" "}
                <path d="M1986 2425 c-9 -9 -16 -20 -16 -25 0 -17 33 -41 53 -38 11 2 25 11 31 21 24 38 -35 75 -68 42z" />{" "}
                <path d="M2188 2316 c-15 -21 -15 -25 -3 -30 22 -8 18 -43 -7 -60 -18 -13 -19 -16 -6 -16 9 0 21 -7 26 -16 8 -15 12 -14 31 5 18 18 19 22 6 27 -21 8 -19 51 3 63 16 9 16 10 0 16 -10 4 -18 13 -18 21 0 21 -13 17 -32 -10z" />{" "}
                <path d="M740 2221 c0 -12 -5 -21 -12 -21 -8 0 -7 -6 4 -16 15 -15 18 -15 39 0 19 13 20 16 6 16 -11 0 -17 6 -15 16 2 10 -3 19 -9 21 -8 3 -13 -4 -13 -16z" />{" "}
                <path d="M2005 2210 c3 -5 17 -10 31 -10 13 0 24 5 24 10 0 6 -14 10 -31 10 -17 0 -28 -4 -24 -10z" />{" "}
                <path d="M577 2189 c-15 -17 -15 -20 -2 -25 8 -4 15 -12 15 -20 0 -19 5 -18 34 11 18 18 21 25 10 25 -8 0 -17 7 -20 15 -8 19 -15 18 -37 -6z" />{" "}
                <path d="M2051 2126 c-9 -10 -8 -16 4 -26 19 -15 47 3 38 26 -7 18 -27 18 -42 0z" />{" "}
                <path d="M809 2070 c-15 -16 -15 -19 2 -34 18 -15 20 -15 37 2 16 16 16 18 0 35 -21 20 -19 20 -39 -3z" />{" "}
                <path d="M449 1779 c-15 -16 -23 -29 -18 -29 5 0 18 -14 28 -31 19 -31 19 -31 23 -8 1 13 13 29 26 35 22 11 23 12 3 17 -12 3 -24 14 -28 25 -8 19 -9 18 -34 -9z" />{" "}
                <path d="M628 1638 c-17 -17 -17 -19 0 -35 16 -17 18 -17 35 0 17 17 17 18 0 36 -17 17 -19 17 -35 -1z" />{" "}
                <path d="M414 1619 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z" />{" "}
                <path d="M700 1519 c0 -5 16 -9 35 -9 19 0 35 4 35 9 0 5 -16 9 -35 9 -19 0 -35 -4 -35 -9z" />{" "}
                <path d="M850 1461 c0 -5 4 -12 10 -16 5 -3 19 -20 31 -37 l22 -31 -37 5 c-29 3 -36 1 -33 -11 2 -12 14 -15 45 -14 35 2 42 -1 40 -15 -4 -25 39 -28 65 -4 12 11 31 24 41 29 18 10 18 11 -4 18 -13 4 -31 17 -40 28 -12 14 -22 18 -36 13 -18 -7 -17 -9 6 -18 16 -7 20 -12 12 -15 -7 -3 -23 4 -35 14 -39 35 -87 65 -87 54z" />{" "}
              </g>{" "}
            </svg>
          </Link>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Dashboard</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </Link>
              <a
                href="/dashborad"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Messages</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <Link
                to="/grade_report"
                className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
              >
                <span className="sr-only">Documents</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
              <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Settings</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>
        <div className="flex-grow text-gray-800">
          <section className="flex items-center h-20 px-6 sm:px-10 bg-white">
            <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
              <span className="sr-only">Menu</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <div className="relative w-full max-w-md sm:-ml-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                role="search"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
              />
            </div>
            <div className="flex flex-shrink-0 items-center ml-auto">
              <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <span className="sr-only">User Menu</span>
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">{Student.name}</span>
                  <span className="text-sm text-gray-600">{Student.role}</span>
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={Student.image}
                    alt="user"
                    className="h-full w-full object-cover"
                  />
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hidden sm:block h-6 w-6 text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="border-l pl-3 ml-3 space-x-1">
                <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                  <span className="sr-only">Notifications</span>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full" />
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping" />
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                  <span className="sr-only">Log out</span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <section className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">
                  Hello {Student.name}
                </h1>
                <h2 className="text-gray-600 ml-0.5">{Student.major}</h2>
              </div>
              <div className="flex flex-wrap items-start justify-end -mb-3">
                <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit Dashboard
                </button>
                <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <Link to="/grade_report">Student Dashboard</Link>
                </button>
              </div>
            </div>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">62</span>
                  <span className="block text-gray-500">
                    Students including {Student.name}, take these courses
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">6.8</span>
                  <span className="block text-gray-500">Average mark</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">9</span>
                  <span className="inline-block text-xl text-gray-500 font-semibold">
                    (14%)
                  </span>
                  <span className="block text-gray-500">
                    Underperforming students
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">83%</span>
                  <span className="block text-gray-500">
                    Finished homeworks
                  </span>
                </div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#fff"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">25</span>
                  <span className="block text-gray-500">Lectures left</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">139</span>
                  <span className="block text-gray-500">
                    Hours spent on lectures
                  </span>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
