import qrcode

qr=qrcode.QRCode(
    version=10,
# There are 40 version of QR_code to implement
    box_size=10,
    border=5
)
Data="https://github.com/Shivam-Kumar12"
# In the above code we can keep the link to make QR code
qr.add_data(Data)
qr.make(fit=True)
img=qr.make_image(fill="black",back_color="white")
# In the below form the Qr code will be saved in that location of python File
img.save("text.png")
