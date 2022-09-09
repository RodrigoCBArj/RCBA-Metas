import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

export default function SalesCard() {
  const oneMonthBefore = new Date(
    new Date().setDate(new Date().getDate() - 30)
  );

  const [minDate, setMinDate] = useState(oneMonthBefore);
  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/sales`).then((response) => {
      setSales(response.data.content);
    });
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

              {sales.map((sale) => {
                return(
                  <tr key={sale.id}>
                    <td className="show-large">{sale.id}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show-large">{sale.visited}</td>
                    <td className="show-large">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td className="show-mid">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>
                      <div className="red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                )
              })}
          
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
