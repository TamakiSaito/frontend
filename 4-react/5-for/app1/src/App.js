import "./App.css";


export default function App() {
  const userlist = [
    { id: 1, name: "Saito", email: "saito@google.com"},
    { id: 2, name: "Yamamoto", email: "yamamoto@google.com"},
    { id: 3, name: "Yang", email: "yang@google.com"},
  ]

  const render = userlist.map(user => {
    return (
      <div key={user.id}>
        <div>名前:{user.name}</div>
        <div>メアド:{user.email}</div>
      </div>
    );
  });

  return <div className="App"> {render}</div>;
}
