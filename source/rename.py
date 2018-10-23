import os


os.chdir("pics/")
i = 0
for file in os.listdir():
    if file.endswith(".jpg"):
        os.rename(file, str(i + 1) + ".jpg")
        i += 1
    
##os.rename("test.txt", "heck.txt")
