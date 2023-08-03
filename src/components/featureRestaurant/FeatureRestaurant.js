import React from "react";
import bImg from '../../assets/Imgs/b.png'

export default function FeatureRestaurant(props) {
  return (
    <div class="col-lg-3 col-md-6 col-sm-12">
      <div
        class="card border border-0 text-start mx-auto"
        style={{ width: "16rem" }}
      >
        <img
          src={props.src1}
          class="card-img-end img-fluid mt-4 rounded-4"
          alt="..."
        />
        <div class="card-body">
          <table>
            <tr>
              <td>
                <img src={props.src2} />
              </td>
              <td>
                <span class="h5 m-2">{props.name}</span>
                <br />
                <img src={bImg} alt="" style={{ marginLeft: "10px" }} />
                <span style={{ color: "#FFB30E", fontSize: "18px" }}>{ props.number}</span>
              </td>
            </tr>
          </table>
          <div class="card-text"></div>
          <button
            class=" button"
            style={{
              width: "200px",
              marginTop: "20px",
              background: props.bg,
              border: "none",
              borderRadius: "4px",
              color: props.color,
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}
