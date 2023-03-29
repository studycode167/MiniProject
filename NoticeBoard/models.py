# 모델 정의

from sqlalchemy import  Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from database import Base

class Question(Base):
    __tablename__ = "question"      #  __tablename__은 모델에 의해 관리되는 테이블의 이름

    id = Column(Integer, primary_key= True)         # 고유번호
    subject = Column(String, nullable= False)       # 제목
    content = Column(Text, nullable= False)         # 내용
    create_date = Column(DateTime, nullable= False) # 작성일시
    # nullable은 null 값이 들어가느냐 안들어가느냐

class Answer(Base):
    __tablename__ = "answer"
    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)
    question_id = Column(Integer, ForeignKey("question.id"))
    question = relationship("Question", backref="answers")   # 답변 모델에서 질문모델을 참조하기 위해 question 속성 생성, 앞은 참조 파라미터 값 뒤는 역참조 값



