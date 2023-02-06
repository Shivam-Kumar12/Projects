from tkinter import *
# import tkinter as tk
# (this is tthe another way to import tkinter but we have to take a refrence bject in root as tk)
root = Tk()
root.geometry('580x670+100+50')
root.title('Tesla')
root.wm_iconbitmap("tesla.ico")


# functions
def show_data():
    if check_var.get() == "ON":
        get_data = f'Name:{name_var.get()}\nE-mail:{email_var.get()}\nPhone_no:{Phone_var.get()}\nGender:{gender_var.get()}'
        my_Data.config(text=get_data, font="arial 15 bold")
    else:
        my_Data.config(text="Please Accept our terms and condition")


title = Label(root, text='STUDENT ENTRY FORM', font=('times new roman', 30, 'bold'), bg="White", fg="Blue", bd=5, relief=RIDGE)
title.pack(side=TOP)


frame1 = Frame(root, bg='white', bd=3, relief=RIDGE)
frame1.place(x=20, y=60, width=550, height=580)


# Labels

name = Label(frame1 ,text="Student Name", font=('times new roman', 15, 'bold'))
name.grid(row=0, column=0, padx=10, pady=10, sticky=W)


email = Label(frame1, text="Student Email",font=('times new roman', 15, 'bold'))
email.grid(row=1, column=0, padx=10, pady=10, sticky=W)

Phone_no = Label(frame1, text="Contact No.",font=('times new roman', 15, 'bold'))
Phone_no.grid(row=2, column=0, padx=10, pady=10, sticky=W)

gender = Label(frame1, text="Select Gender",font=('times new roman', 15, 'bold'))
gender.grid(row=3, column=0, padx=8, pady=10, sticky=W)

# Variables
name_var = StringVar()
email_var = StringVar()
Phone_var = StringVar()
gender_var = StringVar()
check_var = StringVar()


# Entry feilds

name = Entry(frame1, textvariable=name_var, font=(
    'times new roman', 15, 'bold'), width=20)
name.grid(row=0, column=1, padx=10, pady=0, sticky=W)

email = Entry(frame1, textvariable=email_var, font=(
    'times new roman', 15, 'bold'), width=20)
email.grid(row=1, column=1, padx=10, pady=0, sticky=W)

Phone_no = Entry(frame1, textvariable=Phone_var, font=(
    'times new roman', 15, 'bold'), width=20)
Phone_no.grid(row=2, column=1, padx=10, pady=0, sticky=W)

# radio Button

male = Radiobutton(frame1, variable=gender_var, value="male",
                   text="Male", font="arial 15 bold")
male.grid(row=3, column=1, pady=10, sticky=W)
gender_var.set(0)

Female = Radiobutton(frame1, variable =gender_var,
                     value="female", text ="Female", font="arial 15 bold")
Female.grid(row=4, column=1, pady=10, sticky=W)

# checkbox
check_btn = Checkbutton(frame1, variable=check_var, onvalue="ON", offvalue="OFF",
                        text="I agree with your terms and condition", font="arial 15 bold")
check_btn.grid(row=5, column=1, pady=10, sticky=W)
check_var.set("OFF")

# Button
btn = Button(frame1, text='Submit And Show', font='calibri 15',
             command=show_data, fg="White", bg="blue")
btn.grid(row=6, column=1, pady=10, sticky=W)


my_Data = Label(frame1, text="", font=('times new roman', 15, 'bold'))
my_Data.grid(row=7, column=1, padx=1, pady=10, sticky=W)

root.mainloop()
