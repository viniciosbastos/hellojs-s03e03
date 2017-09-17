create table participantesevento(
    idconvidado integer not null,
    idevento integer not null,
    foreign key (idconvidado) references convidado(idconvidado),
    foreign key (idevento) references evento(idevento),
    primary key (idconvidado,idevento)
  );
  
  insert into participantesevento (idconvidado,idevento) values (1,1);
  insert into participantesevento (idconvidado,idevento) values (2,1);
  insert into participantesevento (idconvidado,idevento) values (1,3);
  insert into participantesevento (idconvidado,idevento) values (1,2);
  insert into participantesevento (idconvidado,idevento) values (2,3);
  insert into participantesevento (idconvidado,idevento) values (3,3);