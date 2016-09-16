function  WWHBookData_AddTOCEntries(P)
{
var A=P.fN("Chapter 1 Guide Introduction","");
var B=A.fN("1.1 About this Manual","0");
B=A.fN("1.2 Audience","1");
B=A.fN("1.3 Programming Languages","2");
B=A.fN("1.4 Acronyms and Abbreviations","3");
B=A.fN("1.5 References","4");
var C=B.fN("2. API Concepts Guide","5");
C=B.fN("3. Elektron Message API Java Configuration Guide","6");
C=B.fN("5. Elektron Message API Java Edition Developers Guide","7");
C=B.fN("6. Transport API Java Edition Value Added Components Developers Guide","8");
C=B.fN("7. Transport API Java Edition Developers Guide","9");
B=A.fN("1.6 Documentation Feedback","10");
B=A.fN("1.7 Document Conventions","11");
A=P.fN("Chapter 2 Product Overview","");
B=A.fN("2.1 EMA Product Description","12");
B=A.fN("2.2 Product Documentation and Learning EMA","13");
B=A.fN("2.3 Consumer Examples","14");
C=B.fN("2.3.1 Provider Examples","15");
B=A.fN("2.4 Supported Features","16");
B=A.fN("2.5 Product Architecture","17");
C=B.fN("2.5.1 EMA Consumer Architecture","18");
var D=C.fN("2.5.2 EMA Non-Interactive Provider Architecture","19");
C=B.fN("2.5.3 EMA Codec Architecture","20");
A=P.fN("Chapter 3 OMM Containers and Messages","");
B=A.fN("3.1 Overview","21");
B=A.fN("3.2 Classes","22");
C=B.fN("3.2.1 DataType Class","22#1019110");
C=B.fN("3.2.2 DataCode Class","23");
C=B.fN("3.2.3 Data Class","24");
C=B.fN("3.2.4 Msg Class","25");
D=C.fN("3.2.5 OmmError Class","26");
B=A.fN("3.3 Working with OMM Containers","27");
C=B.fN("3.3.1 Example: Populating a FieldList Class","28");
C=B.fN("3.3.2 Example: Extracting Information from a FieldList Class","29");
C=B.fN("3.3.3 Example: Extracting FieldList information using a Downcast operation","30");
B=A.fN("3.4 Working with OMM Messages","31");
C=B.fN("3.4.1 Example: Populating the GenericMsg with an ElementList Payload","32");
C=B.fN("3.4.2 Example: Extracting Information from the GenericMsg class","33");
A=P.fN("Chapter 4 Consumer Classes","");
B=A.fN("4.1 OmmConsumer Class","34");
C=B.fN("4.1.1 Connecting to a Server and Opening Items","35");
C=B.fN("4.1.2 Opening Items Immediately After OmmConsumer Object Instantiation","36");
C=B.fN("4.1.3 Destroying the OmmConsumer Object","37");
C=B.fN("4.1.4 Example: Working with the OmmConsumer Class","38");
C=B.fN("4.1.5 Working with Items","39");
D=C.fN("4.1.6 Example: Working with Items","40");
B=A.fN("4.2 OmmConsumerClient Class","41");
C=B.fN("4.2.1 OmmConsumerClient Description","41#1020898");
C=B.fN("4.2.2 Example: OmmConsumerClient","42");
B=A.fN("4.3 OmmConsumerConfig Class","43");
A=P.fN("Chapter 5 Provider Classes","");
B=A.fN("5.1 OmmProvider Class","44");
C=B.fN("5.1.1 Connecting to ADH and Submitting Items","45");
D=C.fN("5.1.2 Submitting Items Immediately After OmmProvider Object Instantiation","46");
C=B.fN("5.1.3 Uninitialize the OmmProvider Object","47");
C=B.fN("5.1.4 Example: Working with the OmmProvider Class","48");
C=B.fN("5.1.5 Working with Items","49");
B=A.fN("5.2 OmmProviderClient Class","50");
C=B.fN("5.2.1 OmmProviderClient Description","50#1025276");
C=B.fN("5.2.2 Example: OmmProviderClient","51");
B=A.fN("5.3 OmmNiProviderConfig Class","52");
A=P.fN("Chapter 6 Troubleshooting and Debugging","");
B=A.fN("6.1 EMA Logger Usage","53");
B=A.fN("6.2 OMM Error Client Classes","54");
C=B.fN("6.2.1 OmmConsumerErrorClient and OmmProviderErrorClient Descriptions","54#1019163");
C=B.fN("6.2.2 Example: OmmConsumerErrorClient","55");
B=A.fN("6.3 OmmException Class","56");
}
