-- Uncomment this line if schema is not created yet
create schema spede;

create table if not exists spede.benchmarks (
    id int NOT NULL unique AUTO_INCREMENT,
    test1 int,
    test_date datetime,
    ram int,
    cpu_cores int,
    os varchar(256),
    PRIMARY KEY (id)
);