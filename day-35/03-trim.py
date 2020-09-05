def Trim(val = '', limit = 5, seperator = "..."):
    info = (val[:limit] + seperator) if limit > 2 else "Minimal 2"
    print(info)

Trim("Ini adalah kalimat",1,"...")

