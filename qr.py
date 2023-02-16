import qrcode

qr=qrcode.QRCode(
    version=10,
    box_size=10,
    border=5
)
Data="https://github.com/Shivam-Kumar12"
qr.add_data(Data)
qr.make(fit=True)
img=qr.make_image(fill="black",back_color="white")
img.save("text.png")