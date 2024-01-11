package Testova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Testova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Услуга
 */
@Entity(name = "IISTestovaУслуга")
@Table(schema = "public", name = "Услуга")
public class Usluga {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодУслуги")
    private Integer кодуслуги;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Цена")
    private Double цена;

    @OneToMany(mappedBy = "usluga", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavUslugi> sostavuslugis;


    public Usluga() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодУслуги() {
      return кодуслуги;
    }

    public void setКодУслуги(Integer кодуслуги) {
      this.кодуслуги = кодуслуги;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}