import "./App.css";


export default function App() {
  const userlist = [
    { id: 1, name: "Saito", email: "saito@google.com"},
    { id: 2, name: "Yamamoto", email: "yamamoto@google.com"},
    { id: 3, name: "Yang", email: "yang@google.com"},
  ]

  // userlistからmapしてuserを一つづつ出す
  const render = userlist.map(user => {
    return (
      // userlistの中身を一つづつ区分する為に「key」が必要！(表示されない)
      <div key={user.id}>
        <div>名前:{user.name}</div>
        <div>メールアドレス:{user.email}</div>
        {/* <hr />は線 */}
        <hr />
      </div>
    );
  });

  // 「render」をここに入れる
  return <div className="App">{render}</div>;
}
