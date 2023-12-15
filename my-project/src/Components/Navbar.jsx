import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        margin: "0 auto",
        backgroundColor: "#fff",
        color: "#fff",
        border: "1px solid #1a202c",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEX///8AAAAuLi7m5ubR0dHW1tZ6enq0tLT39/dqampjY2OioqLs7Ozz8/OYmJhVVVWSkpKrq6u8vLwfHx9FRUUQEBCHh4cXFxfGxsYoKCh0dHRcXFw/Pz9LS0s4ODjg4OAoXj+JAAAEs0lEQVR4nO2c2baaMBRAE8ZcBmUUFJH//8siCaASyNxrV7Mfau0Su81JDodAAoDFKMgdBHENG/kBlOCOTDqFtYwThDeDVrGc0khkzMmTdoLwJzUk1StImYqgjzvU/RaIcJ+tOiNSuEedBY9ah6uRCGbTV3vSUkYiiKV8eSkTEVSRIj3rpj2CKlLtmVh9k5SPIjMRpEoVYZ5wSHkgiYxEkCaFxtx14pIC6cNEBGlSOaxhzycF0o5EUD0ztHlM6ChSAeweTcsnBZKzngh6XfNxDnuTcvs6/IHxy7/4UbgrBdIrye1KThnc8CZVwMf4meqlq7cw25da2ipSiGC+dXqXuozd1n879RxLAbciEZS28h2GFLo+39avA4ohBRISQemqjxK8dykP3vHH+KXGbqgUQZJYuhwTVxupAObjn2P81vHnfaatTykwOCoRTPBImY9FPxspp/QAQmM/eQ4nvzuPVNB5vvTFrhRwVSKIpfL57VaqWGL6GMY2elxHStg8X5rlsAtultcvniMoU/VhqWBfakwGlydRDcfkhPwnOQyG5+uSJcgIzlp/JW+kI8iSGpMObo/0vH59+9mnEOlCdbNSzi0sXjOwpDx4Je0xjr/50nwz+qjJbiEGgrCk4uVU7K5dbysFjq70hTs7S8pZf6cDnX0per4zIzWsMXtefQ37UqC4XXVJpcdSibcmn9TzkvlvtIkfNHiftFd+qSG71zOM8KmROLxS6WnTwL8uhW7bqP+61A+lK/62lE8bH3Qp/5TJciqEpKhZjirlPWgf5SUXkErwybvPThNxtC91kA456F1+KX/6+c4wv4/3pS5KUtXAL+VNH7ss7w+kDk+yTKaSQkhqvWw7kAInp5TlGk2xMCAF/M15gxtcb5qQUsZKWSkrZaWs1JdItYU0iSGp9NbU0vS+GantRY8IkZnS5W8XeX+hpc6JESm3U3BqpssZA6PPDXNZQjwF8d/kKStlpayUlbJSMlKpLMiYVH6W52JISm1+KjAjpVbkiUwv/utS7edzHUJMtykNdPQ2qmTpT6khKYCkUwK5m/3/JE8rZaWslJWyUsJSaXaRxtQEh788bCSDyD1kASm1e8idmUkzqXVGC3cz04tfeQ85VamHK0NT1gC58pia3NeAlbJSVspKfb1UqUOKnIUD2qEShNO3MRersKRIvRKcdHDBFRlzDRRLapBchHxEQRMRkVKcKqNRspzYUkmlW4rZUGwpkFAe41Uh30qISwGUR/qUrux24pIaa053kHpG0G9x7MkDE03ZhVw7FnBJSYPwgjXRpTJmpVIsdbzA1EpZKSv1IqVrLTNZLaoqhZfvlQXSwbz4RVXKJaeDSuEu6AJZFHFXTZ7psn2GPigLtcSkSMWqk4dwhb+RQmpzYxTC/f+dVwoglafcKBxvYsApNUaw11aYl5HoRid7UgAVy9YEYuS4lbv58PxwAwMxKXky2Yi9oVkKX/sI54APrBQvVoqXr5TC6/u0SQVapHBtqGErmIkEP6PDcWV+DP5tD7HtwXaI8MLxWnnjPurqWjU0bEVHW4eshoYZ0nmDGl3UPPMqTFytZd1drjDYgAqlHfpecWKdu1MmCjcYP+40WszxB7K+kleuMnG6AAAAAElFTkSuQmCC"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <h2>Grade+</h2>
        </div>
      </div>

      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
           </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          
          <li>
            <Link to="/Grades">Grade Report</Link>
          </li>
          <li>
            <Link to="/form">Missing Report</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
