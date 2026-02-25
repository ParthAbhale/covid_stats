export default function StatsTable({ data }) {
  return (
    <table>
      <tbody>
        <tr><td>Total Cases</td><td>{data.cases}</td></tr>
        <tr><td>Recovered</td><td>{data.recovered}</td></tr>
        <tr><td>Deaths</td><td>{data.deaths}</td></tr>
      </tbody>
    </table>
  );
}