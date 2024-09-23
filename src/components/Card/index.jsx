import './style.css'
import card from "../../assets/card.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="imgBox">
        <div className="bark" />
        <img src={card} />
      </div>
      <div className="details">
        <h4 className="color1">Chúc Mừng Sinh Nhật</h4>
        <h4 className="color2 margin">(Pék Liên)</h4>
        <p>Dear Pék Liên,</p>
        <p> Chúc em luôn xinh xẻo</p>
        <p> Mọi mong ước đều thành sự thật</p>
        <p> Kiếm nhiều nhiều tiền nuôi 3 thằng mập</p>
        <p> Biết chăm lo cho bản thân, nghe lời hơn</p>
        <p style={{ lineHeight: "16px", marginTop: '-10px', marginBottom: '-10px'}}> Niềng răng nhanh nhanh xong rồi cưới<br/> 10 chồng</p>
        <p> Có nhiều sức khỏe lo cho tụi tui</p>
        <p className="text-right">Lò Vé Diu💋</p>
        <p className="text-right">♥Khoa đẹp trai</p>
      </div>
    </div>
  );
};

export default Card;
