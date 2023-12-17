import pandas as pd
import re
import csv

def making_text_clean(text):
    clean_text = re.sub(r"[^가-힣\s]", "", text)
    return clean_text.split()

def write_csv(book_list : list, library_name : str):
    f = open(f'{library_name}.csv', 'w', newline='', encoding='UTF-8')
    wr = csv.writer(f)
    wr.writerows(book_list)


csv_data = pd.read_csv("data_utf-8.csv", encoding="utf-8")

# for library_name in library_list:
library_name = "전주시립도서관꽃심"
book_data = csv_data[csv_data['도서관명'] == library_name]
book_list = book_data["서명"]
book_list_with_data = []
for book_text in book_list[0:20000]:
    author_name = book_data[(book_data['서명'] == book_text)]["저자명"].to_string(buf=None, header=False, index=False).split('\n')[0]
    clean_book_name = making_text_clean(book_text)
    book_name = book_data[(book_data['서명'] == book_text)]["서명"].to_string(buf=None, header=False, index=False).split("\n")[0]
    book_place = book_data[(book_data['서명'] == book_text)]["자료실"].to_string(buf=None, header=False, index=False).split("\n")[0]
    book_list_with_data.append([library_name, author_name, book_name, book_place, clean_book_name])

write_csv(book_list_with_data, library_name)






