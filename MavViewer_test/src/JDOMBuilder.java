import java.io.IOException;
import java.io.StringReader;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;


/**
 *
 * @author ETj (etj at geo-solutions.it)
 */
public class JDOMBuilder {


    public static Element buildElement(String response) {
        if(response == null)
            return null;

        try{
            SAXBuilder builder = new SAXBuilder();
            Document doc = builder.build(new StringReader(response));
            return  doc.getRootElement();
        } catch (JDOMException ex) {
           ;
        } catch (IOException ex) {
           ;
        }

        return null;
    }

}