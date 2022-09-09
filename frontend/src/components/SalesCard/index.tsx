import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

export default function SalesCard() {
  const sixMonthsBefore = new Date(
    new Date().setDate(new Date().getDate() - 183)
  );

  const [minDate, setMinDate] = useState(sixMonthsBefore);
  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const initialDate = minDate.toISOString().slice(0, 10); // "recorta" os primeiros 10 caracteres da string da data (AAAA-MM-DD)
    const finalDate = maxDate.toISOString().slice(0, 10);

    console.log(sales)

    axios
      .get(`${BASE_URL}/sales?minDate=${initialDate}&maxDate=${finalDate}`)
      .then((response) => {
        setSales(response.data.content);
      });
  }, [minDate, maxDate]);

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
                return (
                  <tr key={sale.id}>
                    <td className="show-large">{sale.id}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show-large">{sale.visited}</td>
                    <td className="show-large">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td className="show-mid">
                      {new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="red-btn-container">
                        <NotificationButton saleId={sale.id} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
