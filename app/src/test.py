# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    test.py                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/03/05 12:35:37 by jmykkane          #+#    #+#              #
#    Updated: 2024/03/05 18:45:37 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from pdfrw import PdfReader, PdfWriter, PdfDict
from pprint import pprint

reader = PdfReader('template.pdf')
annotations = reader.pages[0]['/Annots']

annotations[9].update(PdfDict(V='TEST'))
pprint(annotations[9])

# for annotation in annotations:
	# annotation.update(PdfDict(V='/Yes'))
    # if annotation['/T'] == '(36 kuukautta)':
        # pprint(annotation)

writer = PdfWriter()
writer.write('output2.pdf', reader)