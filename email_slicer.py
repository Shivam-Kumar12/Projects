email_id=input("enter your email id:").strip()
username=email_id[:email_id.index('@')]
domain=email_id[email_id.index('@') +1:]

print(f"your username is {username} and your domain is {domain} ")
