-- Comment this line out if schema has already been created
create schema spede;

-- drop table benchmarks;

create table if not exists benchmarks (
    signature varchar(256),
    test1 decimal(6,4),
    test2 decimal(6,4),
    test3 decimal(6,4),
    test4 decimal(6,4),
    test5 decimal(6,4),
    test_date datetime,
    ram int,
    cpu_cores int,
    cpu_arch varchar(32), -- e.g. amd64
    os varchar(256), -- os name and version
    engine varchar(32), -- browser engine and version
    browser varchar(64), -- browser name and version
    device varchar(64), -- e.g. device model, type, vendor
    PRIMARY KEY (signature)
);