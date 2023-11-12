function SecondRow() {
  const ImageUrl = [
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Black_Friday_Top_entry_points_2023/freeshipping_ar_defult.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Black_Friday_Top_entry_points_2023/stores_ar_defult.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Black_Friday_Top_entry_points_2023/sharwa_ar_defult.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Black_Friday_Top_entry_points_2023/flashsale_en_defult.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Black_Friday_Top_entry_points_2023/offer_ar_defult.jpg",
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {ImageUrl.map((url, index) => (
            <div key={index} className="mx-3 col-2 ">
              <img src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SecondRow;
