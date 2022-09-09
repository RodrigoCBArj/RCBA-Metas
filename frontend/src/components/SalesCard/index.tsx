import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

export default function SalesCard() {
  const oneMonthBefore = new Date(
    new Date().setDate(new Date().getDate() - 30)
  );

  const [minDate, setMinDate] = useState(oneMonthBefore);
  const [maxDate, setMaxDate] = useState(new Date());

  useEffect(() => {
    axios.get("http://localhost:8080/sales")
      .then(response => {
        console.log(response.data)
      })
  }, []);

  return (
    <>
      <div className="card">
        <h2>Vendas</h2>

        <div>
          <div className="form-data-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="form-data-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-data-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="form-data-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="sales-table">
            <thead>
              <tr>
                <th className="show-large">ID</th>
                <th>Vendedor</th>
                <th className="show-large">Visitas</th>
                <th className="show-large">Vendas</th>
                <th>Total</th>
                <th className="show-mid">Data</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show-large">#123</td>
                <td>Rodrigo</td>
                <td className="show-large">13</td>
                <td className="show-large">9</td>
                <td>R$ 55300.00</td>
                <td className="show-mid">06/09/2022</td>
                <td>
                  <div className="red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show-large">#123</td>
                <td>Rodrigo</td>
                <td className="show-large">13</td>
                <td className="show-large">9</td>
                <td>R$ 55300.00</td>
                <td className="show-mid">06/09/2022</td>
                <td>
                  <div className="red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show-large">#123</td>
                <td>Rodrigo</td>
                <td className="show-large">13</td>
                <td className="show-large">9</td>
                <td>R$ 55300.00</td>
                <td className="show-mid">06/09/2022</td>
                <td>
                  <div className="red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
