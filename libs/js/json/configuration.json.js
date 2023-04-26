Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Procedimento Administrativo da Regularização Fundiária Urbana","publishDate":"26/04/2023 10:48:04","pages":[{"id":"372e31e2-9384-4a92-9035-159f45f1c8b8","name":"Procedimento Administrativo da Regularização Fundiária Urbana","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Processo que descreve o Procedimento Administrativo da Regulariza&ccedil;&atilde;o Fundi&aacute;ria Urbana.</span></p>","version":"1","author":"Secretaria de Programas e Projetos Estratégicos (SPPE)","image":"files\\diagrams\\Procedimento_Administrativo_da_Regularizacao_Fundiaria_Urbana.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"92fb5e58-ac97-484f-9aab-c3b872a8c3df","name":"Procedimento Administrativo de Regularização Fundiária Urbana","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":215.0}],"radius":0.0,"height":2147.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"7411ccc4-625a-4d7b-9e3d-321638eddfdd","name":"Início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":196.0,"y":370.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5c2eacf6-18cf-4578-94c1-4498585dd99e","name":"APRESENTAR requerimento ao Município","description":"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":271.0,"y":355.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[{"id":"d1dceec9-b4f3-4ebf-a1f1-44eadedd6b9e","name":"Lei n° 13.465/2017","value":"http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13465.htm","type":"url","urlText":"Lei n° 13.465/2017"}]},{"id":"3539727a-7501-4f2b-b065-0dac8825ab85","name":"180 dias","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":516.0,"y":993.2}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"210856bc-e0b2-42b0-bc41-1cbe6ad0ef8d","name":"ANALISAR admissibilidade","description":"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":584.0,"y":978.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72dd5d3e-14c8-4ebb-a170-d169a53dd355","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":694.0,"y":988.2}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Ausência dos Elementos Mínimos","elementType":"SequenceFlow","properties":[]},{"name":"Indeferido","elementType":"SequenceFlow","properties":[]},{"name":"FIXAR modalidade de REURB","elementType":"SequenceFlow","properties":[]}]},{"id":"0a0ded37-581a-4892-81ff-00a7283b2b2e","name":"EXPEDIR notificação ao legitimado","description":"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":864.0,"y":978.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"786023fe-9df0-4410-8ee8-8e18806dc642","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1000.0,"y":988.2}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não atendeu as exigências","elementType":"SequenceFlow","properties":[]},{"name":"Atendeu as exigências","elementType":"SequenceFlow","properties":[]},{"name":"Atendeu as exigências, mas o Município não fixou modalidade","elementType":"SequenceFlow","properties":[]}]},{"id":"b3e992f8-f438-4e9f-87c5-ab9e7844bf0d","name":"FIXAÇÃO automática da modalidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1390.0,"y":978.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"83b4811c-9e86-4cc7-aaac-901e18b2473e","name":"FIXAR modalidade de REURB","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1240.0,"y":749.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"00fd5bf2-d6ac-40cb-812d-f72eee7c6075","name":"PUBLICAR no DOM","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1879.0,"y":749.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f567a430-621e-41d5-b627-6b4d9c74cc7a","name":"CONVOCAR legitimado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2109.0,"y":749.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1227a608-9e0b-475e-9bfb-9f66d319f33a","name":"APRESENTAR documentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2383.0,"y":312.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"347af5c2-6470-4ba0-ab11-a0c10045b74e","name":"NOTIFICAR interessados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2692.0,"y":764.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6ea4d456-315a-446a-99fd-a87d86c36246","name":"30 dias","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":2835.0,"y":779.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"835b7e3d-4ec3-4148-bd17-921e3464df1b","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2956.0,"y":958.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Impugnação acolhida de forma total ou parcial","elementType":"SequenceFlow","properties":[]},{"name":"Impugnação controversa","elementType":"SequenceFlow","properties":[]}]},{"id":"c844aa9c-ffe5-4119-a292-5d4836af2306","name":"ENCAMINHAR para PGM","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3143.0,"y":1074.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8cc7839-e0ee-451c-9176-1356dbb422a2","name":"REALIZAR Composição Extrajudicial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3273.0,"y":1493.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"31f5cd92-036b-4fd7-ac80-73ae2840b0d5","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3402.0,"y":1503.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Composição extrajudicial infrutífera","elementType":"SequenceFlow","properties":[]},{"name":"Composição extrajudicial frutífera","elementType":"SequenceFlow","properties":[]}]},{"id":"9f8c186a-df64-477e-8b2f-a6be2c668bae","name":"REALIZAR judicialização","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3514.0,"y":1623.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"533479c0-20c1-4a04-a8ca-5c3489a33ee3","name":"PROMOVER alterações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3152.0,"y":837.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be2767da-5753-4a4a-aef1-3517e8e5c728","name":"REJEITAR impugnação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3152.0,"y":690.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dd0ccf17-5d61-4ea1-b499-5147f9bdc8a1","name":"RECEBER/FAZER o Projeto Urbanístico e os Estudos Ambientais","description":"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3837.0,"y":837.2}],"radius":0.0,"height":60.0,"width":146.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5d8a58fa-aea8-45f9-96cf-bd83b19c581a","name":"ENCAMINHAR a SEIMURB","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4083.2002,"y":837.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"143a869c-f8fc-40ef-8dd5-194a4206c089","name":"APROVO urbanístico e ambiental","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4402.001,"y":1884.1}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"404174b0-5174-4109-8b22-2610dd65e38a","name":"ANALISAR demais documentos do Projeto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4573.2,"y":839.2}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"910ba63c-27a7-451e-89f6-ae8a3970c7a6","name":"ORGANIZAR todo o processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4816.39941,"y":839.2}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7ea3db36-28b1-4284-b6f0-7bba0a38a189","name":"ELABORAR termo de compromisso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4960.0,"y":839.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a9cd0c32-b1c1-44be-a1cd-ab2d55beb775","name":"PUBLICAR decisão no DOM","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":5166.0,"y":839.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8c35ec2e-5d68-495a-8697-c927042d345d","name":"EXPEDIR CRF e ENVIAR ao requerente","description":"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":5367.0,"y":839.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"05d4931a-3886-44b8-9af1-7045fa44ee03","name":"SOLICITAR registro da CRF e do Projeto de Regularização Fundiária ao cartório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":5556.2,"y":404.0}],"radius":0.0,"height":60.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"970c079d-6335-428c-9d0a-d6838b8e2ce5","name":"Realizar procedimentos registrais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":5859.0,"y":2215.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"355b9d6e-d70c-49ba-b9d4-48936a0723af","name":"15 dias","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":5982.0,"y":2230.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"93f72277-7bf7-4ac9-b18a-88218c43bc12","name":"EMITIR nota de Exigêncas ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":6087.2,"y":2110.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4944d1f8-1357-4f78-95ef-c88f70d566b4","name":"EXPEDIR nota devolutiva","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":6361.0,"y":2110.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"43b7c589-93e9-45a3-b4d1-d823d1b8305e","name":"PRATICAR atos registrais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":6226.0,"y":2215.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55c8824d-4e92-42d6-b555-8fa2edb4dbcb","name":"ENTREGAR os títulos aos beneficiários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":6361.0,"y":2215.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d4676ae-0b2a-453f-ab30-94911021728e","name":"Fim do Processo","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":6506.0,"y":2230.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c63282ad-0101-4b73-bfe4-baccb9242158","name":"COMUNICAR legitimado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":975.0,"y":1245.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1ffa7731-5a56-4198-b230-25e3373217c9","name":"ARQUIVAR o feito","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1225.0,"y":1245.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a75a7280-4849-4216-bab0-d8414c65afae","name":"Processo arquivado","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1422.0,"y":1260.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"1784b6de-4af1-41bd-b693-d38b3406a2c9","name":"Planta de Perímetro","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2439.0,"y":438.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"6252b37c-84d0-47a0-a856-dcbb7086e4c7","name":"Parecer Jurídico","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2375.0,"y":440.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"2233f442-2e2d-46da-92bc-fd0580076d7d","name":"Termo de Compromisso","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":4985.0,"y":709.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"6660ec1c-0c22-49bb-a99d-fe1c41f1e748","name":"Legitimados","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;line-height:1.6;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Segundo o artigo 14 da Lei n&ordm; 13.465/2017, os legitimados a requerer a Regulariza&ccedil;&atilde;o Fundi&aacute;ria Urbana e promover todos os atos relacionados a esta s&atilde;o: &nbsp;</span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;line-height:1.6;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot;</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;a Uni&atilde;o, os Estados, o Distrito Federal e os Munic&iacute;pios, diretamente ou por meio de entidades da administra&ccedil;&atilde;o p&uacute;blica indireta;</span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;line-height:1.6;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot;</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;os seus benefici&aacute;rios, individual ou coletivamente, diretamente ou por meio de cooperativas habitacionais, associa&ccedil;&otilde;es de moradores, funda&ccedil;&otilde;es, organiza&ccedil;&otilde;es sociais, organiza&ccedil;&otilde;es da sociedade civil de interesse p&uacute;blico ou outras associa&ccedil;&otilde;es civis que tenham por finalidade atividades nas &aacute;reas de desenvolvimento urbano ou regulariza&ccedil;&atilde;o fundi&aacute;ria urbana;</span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;line-height:1.6;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot;</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;os propriet&aacute;rios de im&oacute;veis ou de terrenos, loteadores ou incorporadores;</span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;line-height:1.6;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot;</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;a Defensoria P&uacute;blica, em nome dos benefici&aacute;rios hipossuficientes; e</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot;&nbsp;</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">o Minist&eacute;rio P&uacute;blico.</span></p>","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":215.0}],"radius":0.0,"height":392.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2d35b682-6b38-403b-989f-3046d77a21e6","name":"Secretaria de Programas e Projetos Estratégicos (SPPE)","description":"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":607.0}],"radius":0.0,"height":808.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e90498b1-1418-4382-b49a-ff266ed0494d","name":"Procuradoria Geral do Município (PGM)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1415.0}],"radius":0.0,"height":337.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"70a483c6-d115-43b0-9ce9-00d7803c8830","name":"Secretaria Municipal de Infraestrutura, Meio Ambiente, Urbanismo e Serviços Urbanos (SEIMURB)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1752.9}],"radius":0.0,"height":292.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2f87bd7f-c6c2-468a-8288-bdfb1b1cdcc6","name":"Cartório de Registro de Imóveis","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2045.2}],"radius":0.0,"height":316.800049,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2bad2d04-2568-4d22-9788-dfc02c1e3e20","name":"Requerimento da REURB","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":70.0,"y":215.0}],"radius":0.0,"height":30.0,"width":2573.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"e1fb92b1-65af-45ca-b396-03e1a76f5352","name":"Processamento Administrativo dos Requerimentos","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":2643.0,"y":215.0}],"radius":0.0,"height":30.0,"width":1049.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"34b4325d-a9b1-4955-8ca6-8b8a975d80c8","name":"Elaboração do Projeto de Regularização Fundiária e Cadastramento Social","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":3692.0,"y":215.0}],"radius":0.0,"height":30.0,"width":1052.7,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"d90d2695-a35b-48d4-b34e-411483fc8f22","name":"Saneamento do Processo Admnistrativo","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":4744.7,"y":215.0}],"radius":0.0,"height":30.0,"width":367.3,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"a333b446-49d1-4378-bdde-2a7ff9e59cdf","name":"Decisão da Autoridade Competente","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":5112.0,"y":215.0}],"radius":0.0,"height":30.0,"width":200.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"3955b44a-29d5-4b1f-b9e3-f3377741a39f","name":"Expedição da CRF","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":5312.0,"y":215.0}],"radius":0.0,"height":30.0,"width":423.4,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"34a32872-88b4-4abc-bd54-c6e4afb4ea0b","name":"Registro da CRF e do PRF aprovado perante Oficial de Cartório de Registro de Imóveis","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":5735.4,"y":215.0}],"radius":0.0,"height":30.0,"width":848.6001,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"372e31e2-9384-4a92-9035-159f45f1c8b8","containerName":"Procedimento Administrativo da Regularização Fundiária Urbana","isSubprocess":false,"elements":[{"id":"f6aceffa-ab80-4f22-891e-2994ef75c028"},{"id":"66a5ce39-8e2a-43bf-ae54-c6d5b17a71e9"},{"id":"92fb5e58-ac97-484f-9aab-c3b872a8c3df","value":"Procedimento Administrativo de Regularização Fundiária Urbana"},{"id":"6660ec1c-0c22-49bb-a99d-fe1c41f1e748","value":"Legitimados"},{"id":"2d35b682-6b38-403b-989f-3046d77a21e6","value":"Secretaria de Programas e Projetos Estratégicos (SPPE)"},{"id":"e90498b1-1418-4382-b49a-ff266ed0494d","value":"Procuradoria Geral do Município (PGM)"},{"id":"70a483c6-d115-43b0-9ce9-00d7803c8830","value":"Secretaria Municipal de Infraestrutura, Meio Ambiente, Urbanismo e Serviços Urbanos (SEIMURB)"},{"id":"2f87bd7f-c6c2-468a-8288-bdfb1b1cdcc6","value":"Cartório de Registro de Imóveis"},{"id":"2bad2d04-2568-4d22-9788-dfc02c1e3e20","value":"Requerimento da REURB"},{"id":"e1fb92b1-65af-45ca-b396-03e1a76f5352","value":"Processamento Administrativo dos Requerimentos"},{"id":"34b4325d-a9b1-4955-8ca6-8b8a975d80c8","value":"Elaboração do Projeto de Regularização Fundiária e Cadastramento Social"},{"id":"d90d2695-a35b-48d4-b34e-411483fc8f22","value":"Saneamento do Processo Admnistrativo"},{"id":"a333b446-49d1-4378-bdde-2a7ff9e59cdf","value":"Decisão da Autoridade Competente"},{"id":"3955b44a-29d5-4b1f-b9e3-f3377741a39f","value":"Expedição da CRF"},{"id":"34a32872-88b4-4abc-bd54-c6e4afb4ea0b","value":"Registro da CRF e do PRF aprovado perante Oficial de Cartório de Registro de Imóveis"},{"id":"1784b6de-4af1-41bd-b693-d38b3406a2c9","value":"Planta de Perímetro"},{"id":"6252b37c-84d0-47a0-a856-dcbb7086e4c7","value":"Parecer Jurídico"},{"id":"2233f442-2e2d-46da-92bc-fd0580076d7d","value":"Termo de Compromisso"},{"id":"7411ccc4-625a-4d7b-9e3d-321638eddfdd","value":"Início"},{"id":"5c2eacf6-18cf-4578-94c1-4498585dd99e","value":"APRESENTAR requerimento ao Município"},{"id":"210856bc-e0b2-42b0-bc41-1cbe6ad0ef8d","value":"ANALISAR admissibilidade"},{"id":"72dd5d3e-14c8-4ebb-a170-d169a53dd355","value":""},{"id":"0a0ded37-581a-4892-81ff-00a7283b2b2e","value":"EXPEDIR notificação ao legitimado"},{"id":"a75a7280-4849-4216-bab0-d8414c65afae","value":"Processo arquivado"},{"id":"786023fe-9df0-4410-8ee8-8e18806dc642","value":""},{"id":"1ffa7731-5a56-4198-b230-25e3373217c9","value":"ARQUIVAR o feito"},{"id":"83b4811c-9e86-4cc7-aaac-901e18b2473e","value":"FIXAR modalidade de REURB"},{"id":"b3e992f8-f438-4e9f-87c5-ab9e7844bf0d","value":"FIXAÇÃO automática da modalidade"},{"id":"00fd5bf2-d6ac-40cb-812d-f72eee7c6075","value":"PUBLICAR no DOM"},{"id":"f567a430-621e-41d5-b627-6b4d9c74cc7a","value":"CONVOCAR legitimado"},{"id":"1227a608-9e0b-475e-9bfb-9f66d319f33a","value":"APRESENTAR documentação"},{"id":"c63282ad-0101-4b73-bfe4-baccb9242158","value":"COMUNICAR legitimado"},{"id":"347af5c2-6470-4ba0-ab11-a0c10045b74e","value":"NOTIFICAR interessados"},{"id":"6ea4d456-315a-446a-99fd-a87d86c36246","value":"30 dias"},{"id":"be2767da-5753-4a4a-aef1-3517e8e5c728","value":"REJEITAR impugnação"},{"id":"835b7e3d-4ec3-4148-bd17-921e3464df1b","value":""},{"id":"533479c0-20c1-4a04-a8ca-5c3489a33ee3","value":"PROMOVER alterações"},{"id":"5d8a58fa-aea8-45f9-96cf-bd83b19c581a","value":"ENCAMINHAR a SEIMURB"},{"id":"143a869c-f8fc-40ef-8dd5-194a4206c089","value":"APROVO urbanístico e ambiental"},{"id":"404174b0-5174-4109-8b22-2610dd65e38a","value":"ANALISAR demais documentos do Projeto"},{"id":"dd0ccf17-5d61-4ea1-b499-5147f9bdc8a1","value":"RECEBER/FAZER o Projeto Urbanístico e os Estudos Ambientais"},{"id":"910ba63c-27a7-451e-89f6-ae8a3970c7a6","value":"ORGANIZAR todo o processo"},{"id":"7ea3db36-28b1-4284-b6f0-7bba0a38a189","value":"ELABORAR termo de compromisso"},{"id":"a9cd0c32-b1c1-44be-a1cd-ab2d55beb775","value":"PUBLICAR decisão no DOM"},{"id":"8c35ec2e-5d68-495a-8697-c927042d345d","value":"EXPEDIR CRF e ENVIAR ao requerente"},{"id":"3539727a-7501-4f2b-b065-0dac8825ab85","value":"180 dias"},{"id":"c844aa9c-ffe5-4119-a292-5d4836af2306","value":"ENCAMINHAR para PGM"},{"id":"c8cc7839-e0ee-451c-9176-1356dbb422a2","value":"REALIZAR Composição Extrajudicial"},{"id":"31f5cd92-036b-4fd7-ac80-73ae2840b0d5","value":""},{"id":"9f8c186a-df64-477e-8b2f-a6be2c668bae","value":"REALIZAR judicialização"},{"id":"05d4931a-3886-44b8-9af1-7045fa44ee03","value":"SOLICITAR registro da CRF e do Projeto de Regularização Fundiária ao cartório"},{"id":"970c079d-6335-428c-9d0a-d6838b8e2ce5","value":"Realizar procedimentos registrais"},{"id":"93f72277-7bf7-4ac9-b18a-88218c43bc12","value":"EMITIR nota de Exigêncas "},{"id":"355b9d6e-d70c-49ba-b9d4-48936a0723af","value":"15 dias"},{"id":"43b7c589-93e9-45a3-b4d1-d823d1b8305e","value":"PRATICAR atos registrais"},{"id":"55c8824d-4e92-42d6-b555-8fa2edb4dbcb","value":"ENTREGAR os títulos aos beneficiários"},{"id":"4944d1f8-1357-4f78-95ef-c88f70d566b4","value":"EXPEDIR nota devolutiva"},{"id":"8d4676ae-0b2a-453f-ab30-94911021728e","value":"Fim do Processo"},{"id":"a2f5d10b-1f41-463e-963c-c75095ff2ae5"},{"id":"666dbe9d-ac9e-4076-8368-5cc04fa64cf2"},{"id":"e534f6e7-733a-4480-8a13-7edd79c6bb87"}]}]}