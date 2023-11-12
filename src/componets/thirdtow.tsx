function ThirdDiv() {
  const imgs = [
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_tvs_ar_web.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_storage_ar_web.jpg",
    "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_gaming_ar_web.jpg",
    'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_watches_ar_web.jpg',
    'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_chargers_ar_web.jpg',
    'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_tws_ar_web.jpg',
    'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_laptop_ar_web.jpg',
    'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/mother-day-2023/entry_mobile_ar_web.jpg',

  ];
  return (
    <>
      <div className="container">
        <div className="row my-5">
            
            {imgs.map((url,index)=>
            <div className="col  "><img key={index} src={url}  />
            </div>
            )}
        
        </div>
      </div>
    </>
  );
}
export default ThirdDiv;
