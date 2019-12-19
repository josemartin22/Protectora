CREATE FUNCTION set_modificado() RETURNS trigger AS $$
begin
  new.modificado := true;
  return new;
end
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_modificado_trigger BEFORE UPDATE
    ON animales_acogidos FOR EACH ROW EXECUTE FUNCTION set_modificado();