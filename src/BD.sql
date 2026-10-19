ACCEPT num PROMPT 'Donner le numero de l employe : '

DECLARE
    v_nom Employe.Nom%TYPE;
    v_salaire Employe.Salaire%TYPE;
    v_nomdep Employe.Nom_departement%TYPE;
    v_nomsup Employe.No_superviseur%TYPE;
BEGIN
    SELECT Nom, Salaire, Nom_departement, No_superviseur
    INTO v_nom, v_salaire, v_nomdep, v_nomsup
    FROM Employe
    WHERE No_employe = &num;

    DBMS_OUTPUT.PUT_LINE('Le nom est : ' || v_nom
    || ' le salaire est : ' || v_salaire
    || ' le nom du departement est : ' || v_nomdep
    || ' le numero du superieur est : ' || v_nomsup);
END;
/