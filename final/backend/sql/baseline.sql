-- Comment this line out if schema has already been created
create schema spede;

create table if not exists spede.benchmarks (
    id int NOT NULL unique AUTO_INCREMENT,
    test1 int,
    test_date datetime,
    ram int,
    cpu_cores int,
    cpu_arch varchar(32), -- e.g. amd64
    os varchar(256), -- os name and version
    engine varchar(32), -- browser engine and version
    browser varchar(64), -- browser name and version
    device varchar(64), -- e.g. device model, type, vendor
    signature varchar(256),
    PRIMARY KEY (id)
);