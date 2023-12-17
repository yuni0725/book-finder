def jaccard(A : list, B : list):
    a = set(A)
    b = set(B)
    return int(round(float(len(a.intersection(b)) / len(a.union(b))), 2) * 100)

def read_csv():
    import csv
    data = []

    f = open('전주시립도서관꽃심.csv', 'r', encoding='UTF-8')
    rdr = csv.reader(f)

    for line in rdr:
        library_name = line[0]
        author_name = line[1]
        book_name = line[2]
        book_place = line[3]
        book_name_list = line[4]

        data.append({
            "도서관" : library_name,
            "작가" : author_name,
            "도서명" : book_name,
            "도서위치" : book_place,
            "도서이름리스트" : book_name_list,
        })
    f.close()

    return data

def match_data(data : list, book_name : str):
    data_with_value = []
    book_name_list = book_name.split(" ")
    for d in data:
        value = jaccard(eval(d["도서이름리스트"]), book_name_list)
        d["자카드유사도"] = value
        data_with_value.append(d)

    return sort_data(data_with_value)


def sort_data(data : list):
    sorted_data = sorted(data, key=lambda x: x["자카드유사도"], reverse=True)
    
    return sorted_data