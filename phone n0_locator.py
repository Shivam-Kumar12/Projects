import json
import phonenumbers
from phonenumbers import geocoder

import pycountry
from tkinter import Tk, Label, Button, Entry
from phone_iso3166.country import phone_country


class Location_Tracker:
    def __init__(self, App):
        self.window = App
        self.window.title("Phone number Tracker")
        self.window.geometry("500x400")
        # self.window.configure(bg="")
        self.window.resizable(False, False)

        # ___________Application menu_____________
        Label(App, text="Enter a phone number", fg="Black",font=("Arial Black", 20)).place(x=100, y=30)
        self.phone_number = Entry(App, width=16, font=("Arial", 15),highlightthickness=2,highlightbackground='black',relief="flat")
        self.track_button = Button(App, text="Track Country", bg="skyblue", relief="sunken")
        self.country_label = Label(App, fg="Red", font=("Times", 20),width=20,justify='center',highlightbackground="blue",highlightthickness=2)

        # ___________Place widgets on the window______
        self.phone_number.place(x=170, y=120)
        self.track_button.place(x=200, y=200)
        self.country_label.place(x=100, y=280)

        # __________Linking button with countries ________
        self.track_button.bind("<Button>", self.Track_location)

        # 255757294146

    def Track_location(self, event):
        phone_number = self.phone_number.get()
        country = "Unknown Country"
        if phone_number:
            tracked = pycountry.countries.get(alpha_2=phone_country(phone_number))
            print(tracked)
            if tracked:
                country = tracked.name
        self.country_label.configure(text=country)


PhoneTracker = Tk()
MyApp = Location_Tracker(PhoneTracker)
# MyApp =geocoder.description_for_number(phone_country,'en')
PhoneTracker.mainloop()
