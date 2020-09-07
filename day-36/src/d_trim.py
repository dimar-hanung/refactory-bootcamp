def Trim(val = '', limit = 2, seperator = "..."):
    
    val = val.split(' ')
    info = (' '.join(val[:limit]) + seperator) if limit > 1 else "Minimal 2"
    return info

Trim("Ini adalah kalimat",2,"...")

